export interface PagingParkingLot {
    content: Array<ParkingLotContent>;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalElement: number;
}

export interface ParkingLotContent {
    id: string;
    ownerId : string;
    name : string;
    address : string;
    size : number;
    capacity : number;
    category : string;
}