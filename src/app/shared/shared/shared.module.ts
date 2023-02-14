import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuDividerDirective, NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    NzTableModule,
    NzDividerModule,
    NzPopconfirmModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    NzInputModule
  ],
  exports:[
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    NzTableModule,
    NzDividerModule,
    NzPopconfirmModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    NzInputModule
  ]
})
export class SharedModule { }
