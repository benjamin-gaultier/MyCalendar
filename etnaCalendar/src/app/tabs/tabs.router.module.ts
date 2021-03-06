
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';
import { DataResolverService } from '../services/data-resolver.service';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
            { path: 'calendar', loadChildren: '../calendar/calendar.module#CalendarPageModule',
                resolve: {
                special: DataResolverService
              }, },
            { path: 'uploader', loadChildren: '../uploader/uploader.module#UploaderPageModule' },
            { path: 'calendarList', loadChildren: '../calendar-list/calendar-list.module#CalendarListPageModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsRoutingModule { }
