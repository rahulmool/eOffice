import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tasks',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tasks/tasks.module').then(m => m.TasksPageModule)
          }
        ]
      },
      {
        path: 'work',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../work/work.module').then(m => m.WorkPageModule)
          }
        ]
      },
      {
        path: 'notification',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../notification/notification.module').then(m => m.NotificationPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'todo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../todo/todo.module').then(m => m.TodoPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/tasks',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
