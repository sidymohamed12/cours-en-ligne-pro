
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Book, User, Bell, Search } from 'lucide-react';

const MessagingPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);

  const conversations = [
    { id: 1, name: "Prof. Martin", subject: "Mathématiques", lastMessage: "Voici la correction de l'exercice", time: "10:30", unread: 2 },
    { id: 2, name: "Support technique", subject: "Assistance", lastMessage: "Nous avons résolu votre problème", time: "09:45", unread: 0 },
    { id: 3, name: "Prof. Dubois", subject: "Histoire", lastMessage: "N'oubliez pas le devoir pour demain", time: "Hier", unread: 1 }
  ];

  const messages = [
    { id: 1, sender: "Prof. Martin", content: "Bonjour, avez-vous des questions sur le chapitre ?", time: "10:15", isOwn: false },
    { id: 2, sender: "Vous", content: "Oui, je ne comprends pas l'exercice 3", time: "10:20", isOwn: true },
    { id: 3, sender: "Prof. Martin", content: "Voici la correction de l'exercice", time: "10:30", isOwn: false }
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
            <Button variant="ghost" size="sm" asChild>
              <Link to="/profil">
                <User className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Messagerie & Assistance</h1>
          <p className="text-muted-foreground">Communiquez avec vos enseignants et l'équipe support</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Liste des conversations */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Conversations
                  <Button size="sm" variant="outline">Nouveau</Button>
                </CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Rechercher..." className="pl-10" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-3 cursor-pointer hover:bg-muted/50 transition-colors ${
                        selectedConversation === conversation.id ? 'bg-primary/10 border-r-2 border-primary' : ''
                      }`}
                      onClick={() => setSelectedConversation(conversation.id)}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium text-sm">{conversation.name}</p>
                        <span className="text-xs text-muted-foreground">{conversation.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{conversation.subject}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground truncate flex-1 mr-2">
                          {conversation.lastMessage}
                        </p>
                        {conversation.unread > 0 && (
                          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                            {conversation.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Zone de conversation */}
          <div className="lg:col-span-3">
            <Card className="h-full flex flex-col">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Prof. Martin</CardTitle>
                    <p className="text-sm text-muted-foreground">Mathématiques - En ligne</p>
                  </div>
                  <Button variant="outline" size="sm">Appel vidéo</Button>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isOwn 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Zone de saisie */}
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Input placeholder="Tapez votre message..." className="flex-1" />
                    <Button className="gradient-primary text-white">Envoyer</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingPage;
