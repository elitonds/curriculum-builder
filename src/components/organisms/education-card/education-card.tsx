import { Row, Input, DatePicker } from "antd";
import { Grid } from "../../atoms/custom-col/custom-col";

interface EducationCardProps {}

const EducationCard: React.FC<EducationCardProps> = (props) => {
  const { TextArea } = Input;
  const { RangePicker } = DatePicker;
  return (
    <Row>
      <Grid span={12}>
        <Input id="school" placeholder="School" />
      </Grid>
      <Grid span={12}>
        <Input id="degree" placeholder="Degree" />
      </Grid>
      <Grid span={12}>
        <Input id="title" placeholder="Title" />
      </Grid>
      <Grid span={12}>
        <RangePicker
          id="start-end-date"
          picker="month"
          placeholder={["Start date", "End date"]}
        />
      </Grid>
      <Grid span={24}>
        <TextArea rows={4} id="description" placeholder="Description" />
      </Grid>
    </Row>
  );
};

export default EducationCard;
