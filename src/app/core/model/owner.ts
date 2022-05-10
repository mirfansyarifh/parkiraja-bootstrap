export interface OwnerPageable{
    content:Array<OwnerData>;
    pageNumber:number;
    pageSize:number;
    totalPage:number;
    totalElement:number;
}

export interface OwnerData{
  id?: string;
  idCard?: string;
  name?: string;
  address?: string;
  phoneNumber?: string;
}
