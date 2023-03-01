import algoliasearch, { SearchClient, SearchIndex } from 'algoliasearch';

export enum SortingReplicas {
    Main = 'Main',
    DocsByModified = 'docs_by_modified',
    DocsByViewed = 'docs_by_viewed'
};

export default class AlgoliaSearch {
    // note: you must set the the facet fields in the dashboard if you are to filter on them!!!
    private requestOptions: { headers: { "x-algolia-application-id": string }, createIfNotExists?: boolean, filters?: string };
    private client: SearchClient;
    private index: SearchIndex
    private mainIndexName: string

    constructor(appId: string, apiKey: string, indexName: string) {
        this.requestOptions = { headers: { "x-algolia-application-id": appId } };
        this.client = algoliasearch(appId, apiKey);     
        this.mainIndexName = indexName;        
        this.index = this.client.initIndex(this.mainIndexName);
        this.index.setSettings({
            attributesForFaceting: [
                'searchable(parentSection)'
            ],
            replicas: [
                SortingReplicas.DocsByModified,
                SortingReplicas.DocsByViewed
            ]
        });
    }

    async saveObjects(docs: any[]) {
        const response = await this.index.saveObjects(docs, this.requestOptions);
        return response.objectIDs;
    }

    async findObject(searchPredicate: (hit: any) => boolean) {
        return await this.index.findObject(searchPredicate, this.requestOptions);
    }

    async updateObjectsPartially(objs: any[], createIfNotExists: boolean = true) {
        const requestOptions = { ...this.requestOptions };
        requestOptions.createIfNotExists = createIfNotExists;
        return await this.index.partialUpdateObjects(objs, requestOptions);
    }

    async search(query: string, sortingReplica: SortingReplicas, filters?: string) {
        this.resetIndexForSorting(sortingReplica);

        const requestOptions = { ...this.requestOptions };
        if (filters) {
            requestOptions.filters = filters;
        }

        return await this.index.search(query, requestOptions);
    }

    private resetIndexForSorting(replica: SortingReplicas) {
        this.index = this.client.initIndex(replica === SortingReplicas.Main ? this.mainIndexName : replica);
        if (replica === SortingReplicas.DocsByViewed) {
            this.index.setSettings({
                ranking: [
                    'desc(viewed)'
                ]
            });
        } else if (replica === SortingReplicas.DocsByModified) {
            this.index.setSettings({
                ranking: [
                    'desc(modified)'
                ]
            });
        }
    }
}