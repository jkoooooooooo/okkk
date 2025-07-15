import { useParams } from 'react-router-dom'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { SubjectQuiz } from '@/components/quiz/SubjectQuiz'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function SubjectQuizPage() {
  const { subjectId } = useParams<{ subjectId: string }>()

  const subjectNames: { [key: string]: string } = {
    'general-knowledge': 'General Knowledge',
    'indian-constitution': 'Indian Constitution',
    'indian-history': 'Indian History',
    'geography': 'Geography',
    'science-technology': 'Science & Technology',
    'current-affairs': 'Current Affairs',
    'mathematics': 'Mathematics',
    'reasoning': 'Reasoning',
    'english': 'English Language'
  }

  const subjectName = subjectId ? subjectNames[subjectId] || 'Unknown Subject' : 'Unknown Subject'

  const handleQuizComplete = (score: number, total: number) => {
    console.log('Subject quiz completed:', { score, total, subject: subjectId })
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Link to="/subjects">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Subjects
                </Button>
              </Link>
            </div>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BookOpen className="h-6 w-6" />
              {subjectName} Test
            </CardTitle>
            <CardDescription>
              Test your knowledge in {subjectName.toLowerCase()} with carefully selected questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Complete this subject-specific test to assess your understanding and identify areas for improvement.
            </p>
          </CardContent>
        </Card>

        {/* Quiz Component */}
        <SubjectQuiz subject={subjectId || ''} onComplete={handleQuizComplete} />
      </div>
    </DashboardLayout>
  )
}