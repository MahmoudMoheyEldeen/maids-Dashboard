import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'maids-Dashboard',
    pathMatch: 'full',
  },

  {
    path: '',
    loadChildren: () =>
      import('../app/main-content/main-content.module').then(
        (m) => m.MainContentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
