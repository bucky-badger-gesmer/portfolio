import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Card, Typography } from "antd";

const { Link, Title, Text } = Typography;

const Avatar = () => {
  return (
    <div className="mb-4 md:mb-0">
      <Card
        cover={
          <div>
            <img alt="Aaron Gesmer's Avatar" src="/avatar.jpeg" />
          </div>
        }
        actions={[
          <Link href="https://github.com/bucky-badger-gesmer/" target="_blank">
            <GithubOutlined /> Github
          </Link>,
          <Link
            href="https://www.linkedin.com/in/aaron-gesmer/"
            target="_blank"
          >
            <LinkedinOutlined /> LinkedIn
          </Link>,
          <Link href="mailto:aaron.gesmer@gmail.com">
            <MailOutlined /> Email
          </Link>,
        ]}
      >
        <Title className="text-center" level={2}>
          Hello, World!
        </Title>
        <Text className="text-justify">
          There are so many things in this world that interest me, but I am
          particularly passionate about playing the guitar, collecting watches,
          cooking, and especially technology. I love watching the NBA, and am a
          huge fan of the Minnesota Timberwolves!
        </Text>
      </Card>
    </div>
  );
};

export default Avatar;
