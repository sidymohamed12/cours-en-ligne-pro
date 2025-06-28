
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Book, User, Calendar } from 'lucide-react';

const Login = () => {
  const [userType, setUserType] = useState('student');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md glass-morphism">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
              <Book className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              e-manaschool
            </span>
          </div>
          <CardTitle>Bienvenue sur votre plateforme éducative</CardTitle>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="login" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Se connecter</TabsTrigger>
              <TabsTrigger value="signup">S'inscrire</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              
              <div className="space-y-3">
                <Label>Type de profil</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Card 
                    className={`p-3 cursor-pointer transition-all ${userType === 'student' ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'}`}
                    onClick={() => setUserType('student')}
                  >
                    <User className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-xs text-center">Étudiant</p>
                  </Card>
                  <Card 
                    className={`p-3 cursor-pointer transition-all ${userType === 'teacher' ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'}`}
                    onClick={() => setUserType('teacher')}
                  >
                    <Book className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-xs text-center">Enseignant</p>
                  </Card>
                  <Card 
                    className={`p-3 cursor-pointer transition-all ${userType === 'school' ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'}`}
                    onClick={() => setUserType('school')}
                  >
                    <Calendar className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-xs text-center">École</p>
                  </Card>
                </div>
              </div>
              
              <Button className="w-full gradient-primary text-white" asChild>
                <Link to={userType === 'student' ? '/dashboard/student' : '/dashboard/teacher'}>
                  Se connecter
                </Link>
              </Button>
            </TabsContent>
            
            <TabsContent value="signup" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstname">Prénom</Label>
                  <Input id="firstname" placeholder="Prénom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastname">Nom</Label>
                  <Input id="lastname" placeholder="Nom" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-signup">Email</Label>
                <Input id="email-signup" type="email" placeholder="votre@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-signup">Mot de passe</Label>
                <Input id="password-signup" type="password" placeholder="••••••••" />
              </div>
              
              <div className="space-y-3">
                <Label>Type de profil</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Card 
                    className={`p-3 cursor-pointer transition-all ${userType === 'student' ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'}`}
                    onClick={() => setUserType('student')}
                  >
                    <User className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-xs text-center">Étudiant</p>
                  </Card>
                  <Card 
                    className={`p-3 cursor-pointer transition-all ${userType === 'teacher' ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'}`}
                    onClick={() => setUserType('teacher')}
                  >
                    <Book className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-xs text-center">Enseignant</p>
                  </Card>
                  <Card 
                    className={`p-3 cursor-pointer transition-all ${userType === 'school' ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'}`}
                    onClick={() => setUserType('school')}
                  >
                    <Calendar className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-xs text-center">École</p>
                  </Card>
                </div>
              </div>
              
              <Button className="w-full gradient-primary text-white">
                Créer mon compte
              </Button>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
              ← Retour à l'accueil
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
