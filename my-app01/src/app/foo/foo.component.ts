import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.less']
})
export class FooComponent implements OnInit {
      message="消息";
      name = "zhangsan"
      heroImageUrl="http://img3.imgtn.bdimg.com/it/u=1208538952,1443328523&fm=26&gp=0.jpg";
      isButtonDisabled="true"

  constructor() { }

  ngOnInit() {
  }

}
