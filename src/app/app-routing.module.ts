import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'maids-Dashboard',
  },

  {
    path: 'maids-Dashboard',
    loadChildren: () =>
      import('./main-content/main-content.module').then(
        (m) => m.MainContentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
