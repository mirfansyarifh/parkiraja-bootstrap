import { Component, Input, OnInit } from '@angular/core';
import { OwnerData } from 'src/app/core/model/owner';
import { OwnerService } from 'src/app/core/service/owner/owner.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  idCard = ''
  name = ''
  address = ''
  phoneNumber= ''
  submitted = false;

  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
  }

    newOwner(): void {
      this.submitted = false
      this.idCard = ''
      this.name   = ''
      this.address= ''
      this.phoneNumber= ''
    
  }

  saveOwner(): void {
      const data = {
        idCard: this.idCard,
        name: this.name,
        address: this.address,
        phoneNumber : this.phoneNumber,
      };
      this.ownerService.create(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
          },
          error: (e) => console.error(e)
        });
  }

  inputChange(inputCard, inputName, inputAddress, inputPhoneNumber) {
    if (inputCard) {
      this.idCard = inputCard.target.value
    }
    if (inputName) {
      this.name = inputName.target.value  
    }
    if (inputAddress) { 
      this.address = inputAddress.target.value
    }
    if (inputPhoneNumber) { 
      this.phoneNumber= inputPhoneNumber.target.value
    }
  }
  
}
