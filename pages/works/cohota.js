import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Co Ho Ta">
    <Container>
      <Title>
        Co Ho Ta <Badge>2024 - Present</Badge>
      </Title>

      <P>
        Specialized LMS platform tailored for training programs, digital course
        management and online learning experiences.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://cohota.com" target="_blank">
            cohota.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Role</Meta>
          <span>Full Stack Engineer</span>
        </ListItem>

        <ListItem>
          <Meta>Focus</Meta>
          <span>Learning Platform / Product Delivery</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/cohota_01.png" alt="Co Ho Ta" />
      <WorkImage src="/images/works/cohota_02.png" alt="Co Ho Ta" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'