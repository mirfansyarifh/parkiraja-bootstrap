export interface PagingParking {
    pagingContent: Array<PagingContent>;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalElement: number;
}

export interface PagingContent {
    parkingContent: Array<ParkingContent>;
    timeSpent: string;
}

export interface ParkingContent {
    id: string;
    parkingLotId: string;
    licensePlate: string;
    type: string;
    entrance: Date;
}