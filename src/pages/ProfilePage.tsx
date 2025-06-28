
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Book, User, Bell, Calendar } from 'lucide-react';

const ProfilePage = () => {
  const completedCourses = [
    { id: 1, title: "Algèbre linéaire", subject: "Mathématiques", completedDate: "2024-01-10", grade: "18/20" },
    { id: 2, title: "Histoire contemporaine", subject: "Histoire", completedDate: "2024-01-05", grade: "16/20" },
    { id: 3, title: "Biologie cellulaire", subject: "SVT", completedDate: "2023-12-28", grade: "17/20" }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-white border-b p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Book className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              e-manaschool
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/student">Tableau de bord</Link>
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Mon Profil</h1>
          <p className="text-muted-foreground">Gérez vos informations personnelles et vos paramètres</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Informations personnelles */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstname">Prénom</Label>
                    <Input id="firstname" defaultValue="Marie" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname">Nom</Label>
                    <Input id="lastname" defaultValue="Dupont" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="marie.dupont@example.com" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="class">Classe</Label>
                    <Input id="class" defaultValue="Terminale S" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="school">Établissement</Label>
                    <Input id="school" defaultValue="Lycée Victor Hugo" />
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="gradient-primary text-white">Sauvegarder</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Paramètres</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notifications par email</p>
                    <p className="text-sm text-muted-foreground">Recevoir les notifications par email</p>
                  </div>
                  <Button variant="outline" size="sm">Activé</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Mode sombre</p>
                    <p className="text-sm text-muted-foreground">Utiliser le thème sombre</p>
                  </div>
                  <Button variant="outline" size="sm">Désactivé</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Téléchargement automatique</p>
                    <p className="text-sm text-muted-foreground">Télécharger automatiquement les nouveaux cours</p>
                  </div>
                  <Button variant="outline" size="sm">Activé</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Photo de profil</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-16 h-16 text-white" />
                </div>
                <Button variant="outline" size="sm" className="mb-2">Changer la photo</Button>
                <p className="text-xs text-muted-foreground">Formats acceptés: JPG, PNG (max 2MB)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Statistiques</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Cours terminés</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Moyenne générale</span>
                    <span className="font-medium text-green-600">17.2/20</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Temps d'étude</span>
                    <span className="font-medium">48h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Devoirs rendus</span>
                    <span className="font-medium">24</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Historique des cours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {completedCourses.map((course) => (
                    <div key={course.id} className="p-3 bg-muted/50 rounded-lg">
                      <p className="font-medium text-sm">{course.title}</p>
                      <p className="text-xs text-muted-foreground">{course.subject}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-muted-foreground">{course.completedDate}</span>
                        <span className="text-sm font-medium text-green-600">{course.grade}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
