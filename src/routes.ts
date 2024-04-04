import { AboutPage } from '@/pages/about'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'
import { BlogDetailPage } from '@/pages/blog-detail'
import { BlogsPage } from '@/pages/blogs'

const routes = (pathName: string) => {
  switch (pathName) {
    case '/':
      return HomePage()

    case '/blogs':
      return BlogsPage()

    // case '/blogs/:name':
    case /^\/blogs\/[a-z0-9-]+/i.test(pathName) ? pathName : '':
      const postName = pathName.split('/')[2]
      return BlogDetailPage({ postName: String(postName) })

    case '/about':
      return AboutPage()

    default:
      return NotFoundPage()
  }
}

export default routes
