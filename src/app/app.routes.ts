import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CadastroComponent } from './components/cadastroLivro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroResenhaComponent } from './components/cadastro-resenha/cadastro-resenha.component';
import { DeslogadoComponent } from './components/deslogado/deslogado.component';

export  const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastroResenha', component: CadastroResenhaComponent },
  { path: 'deslogar', component: DeslogadoComponent },
  { path: '**', component: PageNotFoundComponent },
];


