import { Row, Card } from "antd";
import { EducationCard, Grid } from "../../components";
import { Input } from "antd";
import { EducationalContext } from "../../contexts/educational.context";

const ResumeForm: React.FC<{}> = () => {
  const { TextArea } = Input;

  return (
    <div>
      <Card>
        <Row>
          <Grid span={24}>
            <Input id="title" placeholder="Title" />
          </Grid>
        </Row>
      </Card>

      <Card title="Personal details" style={{ marginTop: "10px" }}>
        <Row>
          <Grid span={24}>
            <Input id="wanted-job-title" placeholder="Wanted job title" />
          </Grid>
          <Grid span={12}>
            <Input id="first-name" placeholder="First name" />
          </Grid>
          <Grid span={12}>
            <Input id="last-name" placeholder="Last name" />
          </Grid>
          <Grid span={12}>
            <Input id="email" placeholder="Email" type="email" />
          </Grid>
          <Grid span={12}>
            <Input id="phone" placeholder="Phone" type="phone" />
          </Grid>
          <Grid span={12}>
            <Input id="country" placeholder="Country" />
          </Grid>
          <Grid span={12}>
            <Input id="city" placeholder="City" />
          </Grid>
        </Row>
      </Card>
      <Card title="Profile" style={{ marginTop: "10px" }}>
        <Row>
          <Grid span={24}>
            <TextArea rows={4} id="profile" placeholder="Profile" />
          </Grid>
        </Row>
      </Card>
      <Card title="Education" style={{ marginTop: "10px" }}>
        <Row>
          <Grid span={24}>
            <EducationCard />
          </Grid>
        </Row>
      </Card>
    </div>
  );
};

export default ResumeForm;
