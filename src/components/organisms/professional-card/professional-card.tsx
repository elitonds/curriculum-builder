import { Row, Input, DatePicker } from "antd";
import { useState } from "react";
import { Grid } from "../../atoms/custom-col/custom-col";
import { ProfessionalDTO } from "./professional.dto";

interface EducationCardProps {
  data: ProfessionalDTO;
}

const EducationCard: React.FC<EducationCardProps> = (props) => {
  const { TextArea } = Input;
  const { RangePicker } = DatePicker;

  const { data } = props;
  const [jobTitle, setJobTitle] = useState(data?.jobTitle);
  const [employer, setEmployer] = useState(data?.employer);
  const [city, setCity] = useState(data?.city);
  const [description, setDescription] = useState(data?.description);

  return (
    <Row style={{marginTop: '10px'}}>
      <Grid span={12}>
        <Input
          id="jobTitle"
          placeholder="Job title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </Grid>
      <Grid span={12}>
        <Input
          id="employer"
          placeholder="Employer"
          value={employer}
          onChange={(e) => setEmployer(e.target.value)}
        />
      </Grid>
      <Grid span={12}>
        <RangePicker
          id="start-end-date"
          picker="month"
          placeholder={["Start date", "End date"]}
        />
      </Grid>
      <Grid span={12}>
        <Input
          id="city"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </Grid>
      <Grid span={24}>
        <TextArea
          rows={4}
          id="description"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Grid>
    </Row>
  );
};

export default EducationCard;
