import {
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { Card, Layout, Timeline, Typography } from "antd";
import Meta from "antd/es/card/Meta";

const { Content } = Layout;
const { Title, Link } = Typography;

const Profile = () => {
  return (
    <Content style={contentStyle}>
      <Card
        style={{ marginTop: 24 }}
        cover={
          <div style={coverStyle}>
            <img
              style={imageStyle}
              alt="Aaron Gesmer's Avatar"
              src="/avatar.jpeg"
            />
          </div>
        }
        actions={[
          <Link href="https://github.com/bucky-badger-gesmer/" target="_blank">
            <GithubOutlined /> Github
          </Link>,
          <Link
            href="https://www.linkedin.com/in/aaron-gesmer-4388b77b/"
            target="_blank"
          >
            <LinkedinOutlined /> LinkedIn
          </Link>,
          <Link href="https://www.facebook.com/aaron.gesmer/" target="_blank">
            <FacebookOutlined /> Facebook
          </Link>,
        ]}
      >
        <Meta
          title="Hello, World!"
          description="There are so many things in this world that interest me, but I am particularly passionate about playing the guitar, cooking, and especially technology. I love watching the NBA, and am a huge fan of the Minnesota Timberwolves! "
        />
      </Card>
      <Title level={3}>Experience</Title>
      <Timeline
        mode="alternate"
        style={timelineStyle}
        items={[
          {
            children: (
              <>
                <Title level={4}>May 13th 2017</Title>
                Graduated from the University of Wisconsin with a Bachelor of
                Arts in Computer Science and a Certificate in Mathematics
              </>
            ),
          },
          {
            children: (
              <>
                <Title level={4}>June 12th 2017</Title>
                Software Engineer I at <Link>Cleo</Link>
              </>
            ),
          },
          {
            children: (
              <>
                <Title level={4}>June 12th 2018</Title>
                Test Engineer I at <Link>Cleo</Link>
              </>
            ),
          },
          {
            children: (
              <>
                <Title level={4}>November 18th 2019</Title>
                Frontend Engineer at <Link>STEALTHbits (now Netwrix)</Link>
              </>
            ),
          },
          {
            children: (
              <>
                <Title level={4}>August 16th 2021</Title>
                Software Engineer - P2 at <Link>Mission Lane</Link>
              </>
            ),
          },
        ]}
      />
    </Content>
  );
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  maxWidth: 800,
  color: "#fff",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 24,
  paddingRight: 24,
};

const coverStyle = {
  width: "100%",
  maxWidth: 500,
  marginLeft: "auto",
  marginRight: "auto",
};

const imageStyle = {
  width: "100%",
  height: "auto",
};

const timelineStyle: React.CSSProperties = {
  textAlign: "left",
};

export default Profile;