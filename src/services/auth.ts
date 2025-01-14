import { User } from '../types/admin';

interface LoginResponse {
  user: User;
  token: string;
}

export class AuthService {
  private static instance: AuthService;
  private token: string | null = null;
  private user: User | null = null;

  private constructor() {
    this.token = localStorage.getItem('auth_token');
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        this.user = JSON.parse(userStr);
      } catch (e) {
        console.error('Erreur lors de la récupération des données utilisateur');
        // Nettoyer les données corrompues
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user');
      }
    }
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      if (!email.endsWith('@gouv.fr')) {
        throw new Error('Seules les adresses email gouvernementales sont autorisées');
      }

      if (password.length < 8) {
        throw new Error('Le mot de passe doit contenir au moins 8 caractères');
      }

      // Simulation d'une requête API
      const response: LoginResponse = {
        user: {
          id: '1',
          email,
          role: 'ADMIN',
          name: 'Administrateur'
        },
        token: 'fake_jwt_token'
      };

      this.setSession(response);
      return true;
    } catch (error) {
      console.error('Erreur de connexion:', error);
      throw error;
    }
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    this.token = null;
    this.user = null;
    window.location.href = '/admin';
  }

  private setSession(authResult: LoginResponse): void {
    this.token = authResult.token;
    this.user = authResult.user;
    localStorage.setItem('auth_token', authResult.token);
    localStorage.setItem('user', JSON.stringify(authResult.user));
  }

  getToken(): string | null {
    return this.token;
  }

  getUser(): User | null {
    return this.user;
  }

  isAuthenticated(): boolean {
    return !!this.token && !!this.user;
  }
}

export default AuthService;
