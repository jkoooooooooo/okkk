import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Play, Clock, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function SubjectsPage() {
  const navigate = useNavigate()

  const subjects = [
    {
      id: 'general-knowledge',
      name: 'General Knowledge',
      description: 'Test your knowledge across various topics',
      questionCount: 150,
      difficulty: 'Mixed',
      estimatedTime: '20 min',
      participants: 1250
    },
    {
      id: 'indian-constitution',
      name: 'Indian Constitution',
      description: 'Fundamental rights, duties, and constitutional provisions',
      questionCount: 120,
      difficulty: 'Medium',
      estimatedTime: '18 min',
      participants: 980
    },
    {
      id: 'indian-history',
      name: 'Indian History',
      description: 'Ancient, medieval, and modern Indian history',
      questionCount: 200,
      difficulty: 'Hard',
      estimatedTime: '25 min',
      participants: 850
    },
    {
      id: 'geography',
      name: 'Geography',
      description: 'Physical and human geography of India and world',
      questionCount: 180,
      difficulty: 'Medium',
      estimatedTime: '22 min',
      participants: 720
    },
    {
      id: 'science-technology',
      name: 'Science & Technology',
      description: 'Latest developments in science and technology',
      questionCount: 160,
      difficulty: 'Hard',
      estimatedTime: '20 min',
      participants: 650
    },
    {
      id: 'current-affairs',
      name: 'Current Affairs',
      description: 'Recent events and developments',
      questionCount: 100,
      difficulty: 'Easy',
      estimatedTime: '15 min',
      participants: 1100
    },
    {
      id: 'mathematics',
      name: 'Mathematics',
      description: 'Quantitative aptitude and mathematical reasoning',
      questionCount: 140,
      difficulty: 'Hard',
      estimatedTime: '25 min',
      participants: 580
    },
    {
      id: 'reasoning',
      name: 'Reasoning',
      description: 'Logical and analytical reasoning',
      questionCount: 130,
      difficulty: 'Medium',
      estimatedTime: '20 min',
      participants: 750
    },
    {
      id: 'english',
      name: 'English Language',
      description: 'Grammar, vocabulary, and comprehension',
      questionCount: 110,
      difficulty: 'Easy',
      estimatedTime: '18 min',
      participants: 920
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'hard':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
    }
  }

  const handleStartTest = (subjectId: string) => {
    navigate(`/quiz/subject/${subjectId}`)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <BookOpen className="h-8 w-8" />
            Subject-wise Tests
          </h1>
          <p className="text-muted-foreground mt-1">
            Choose a subject to practice and improve your knowledge
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Card key={subject.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{subject.name}</CardTitle>
                    <CardDescription className="mt-1">
                      {subject.description}
                    </CardDescription>
                  </div>
                  <Badge className={getDifficultyColor(subject.difficulty)}>
                    {subject.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{subject.questionCount} questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{subject.estimatedTime}</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{subject.participants.toLocaleString()} participants</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  onClick={() => handleStartTest(subject.id)}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Start Test
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Card */}
      </div>
    </DashboardLayout>
  )
}