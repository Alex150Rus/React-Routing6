import PageMain from "components/PageMain";
import PageComments from "components/PageComments";
import PageTopBloggers from "components/PageTopBloggers";

export default [
  {
    path: '/',
    exact: true,
    component: PageMain,
  },
  {
    path: '/comments',
    exact: true,
    component: PageComments,
  },
  {
    path: '/rating',
    exact: true,
    component: PageTopBloggers,
  },
]