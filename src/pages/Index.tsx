import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 relative">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-800">Евгений</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">Обо мне</a>
            <a href="#portfolio" className="text-slate-600 hover:text-blue-600 transition-colors">Портфолио</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Контакты</a>
          </div>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Фрилансер-дизайнер
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Создаю карточки товаров,<br />
            <span className="text-blue-600">которые продают</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Помогаю выделить ваши товары среди конкурентов с помощью уникальных 
            и информативных карточек, которые привлекают внимание клиентов и повышают продажи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Icon name="Mail" className="mr-2" size={20} />
              Обсудить проект
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
              <Icon name="Eye" className="mr-2" size={20} />
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative py-20 bg-gradient-to-r from-slate-100 via-blue-50 to-slate-100">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-slate-300"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-24 h-2 rounded-full shadow-lg"></div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20 bg-white/50 backdrop-blur">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Обо мне</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Мой опыт и подход</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Меня зовут Евгений, и я специализируюсь на создании привлекательных карточек для товаров. 
                Мой опыт включает в себя разработку дизайна, написание описаний и оптимизацию контента для поиска.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Каждая карточка адаптируется под вашу целевую аудиторию и ключевые запросы, 
                чтобы максимально эффективно представить ваши товары.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="Palette" size={20} className="text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Дизайн</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="FileText" size={20} className="text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Копирайтинг</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="Search" size={20} className="text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">SEO</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="Target" size={20} className="text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Таргетинг</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl overflow-hidden">
                <img 
                  src="/img/abae7ede-cbb5-4db9-ad8c-0edc09ce2ce5.jpg" 
                  alt="Рабочее место фрилансера Евгения"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-slate-300"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-24 h-2 rounded-full shadow-lg"></div>
        </div>
      </div>

      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center">Портфолио работ</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Примеры успешных проектов, которые помогли моим клиентам увеличить продажи
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/img/98376744-b3bd-477d-bad7-bd7b11b86a67.jpg" 
                  alt="Пример карточки товара для маркетплейса"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Карточки для маркетплейса</h3>
                <p className="text-slate-600 mb-4">Дизайн карточек товаров для крупного интернет-магазина с увеличением конверсии на 40%</p>
                <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Подробнее
                </Button>
              </div>
            </Card>

            {/* Project Card 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Icon name="Package" size={40} className="text-green-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Продуктовые карточки</h3>
                <p className="text-slate-600 mb-4">Редизайн карточек для стартапа в сфере здорового питания с фокусом на экологичность</p>
                <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Подробнее
                </Button>
              </div>
            </Card>

            {/* Project Card 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Icon name="Smartphone" size={40} className="text-orange-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Электроника и гаджеты</h3>
                <p className="text-slate-600 mb-4">Создание привлекательных карточек для техники с акцентом на технические характеристики</p>
                <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Подробнее
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>



      {/* Divider */}
      <div className="relative py-20 bg-gradient-to-r from-purple-50 via-green-50 to-purple-50">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-slate-300"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 w-24 h-2 rounded-full shadow-lg"></div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Готовы начать?</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Если вы заинтересованы, давайте обсудим ваши нужды и ориентиры!
          </p>
          
          <Card className="p-8 max-w-md mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="text-slate-800 font-medium">Email</div>
                  <div className="text-slate-600">sannikov00099@gmail.com</div>
                </div>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                <Icon name="Send" className="mr-2" size={20} />
                Написать мне
              </Button>
            </div>
          </Card>
          
          <p className="text-slate-500 mt-8">
            С уважением,<br />
            <span className="font-medium text-slate-700">Евгений</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">© 2024 Евгений. Создание карточек товаров для вашего бизнеса.</p>
        </div>
      </footer>
    </div>
  )
}

export default Index