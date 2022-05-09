export interface PagingParking {
    content: Array<PagingContent>;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalElement: number;
}

export interface PagingContent {
    content: ParkingContent;
    timeSpent: string;
}

export interface ParkingContent {
    id: string;
    parkingLotId: string;
    licensePlate: string;
    type: string;
    entrance: Date;
}