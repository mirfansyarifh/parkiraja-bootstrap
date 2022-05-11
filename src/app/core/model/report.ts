export interface PagingReport{
    content: Array<ReportContent>
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalElement: number;
}

export interface ReportContent{
    id: string;
    parkingLotId: string;
    licensePlate: string;
    entrance: Date;
    exit: Date;
    timeSpent: number;
    fee: number;
    totalFee: number;
}