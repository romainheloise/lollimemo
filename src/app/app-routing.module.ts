import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'setup', pathMatch: 'full' },
  {
    path: 'setup',
    loadChildren: async () => {
      const module = await import('./views/setup/setup.module');
      return module.SetupModule;
    },
    data: { animation: 'Setup' },
  },
  {
    path: 'game',
    loadChildren: async () => {
      const module = await import('./views/game/game.module');
      return module.GameModule;
    },
    data: { animation: 'Game' },
  },
  { path: '**', redirectTo: 'setup', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
