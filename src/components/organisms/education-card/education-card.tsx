import { Row, Input, DatePicker, Collapse } from "antd";
import { useState } from "react";
import { Grid } from "../../atoms/custom-col/custom-col";
import { EducationDTO } from "./education.dto";

interface EducationCardProps {
  data: EducationDTO;
}

const EducationCard: React.FC<EducationCardProps> = (props) => {
  const { TextArea } = Input;
  const { Panel } = Collapse;
  const { RangePicker } = DatePicker;

  const { data } = props;
  const [school, setSchool] = useState(data?.school);
  const [degree, setDegree] = useState(data?.degree);
  const [city, setCity] = useState(data?.city);
  const [description, setDescription] = useState(data?.description);

  return (
    <Collapse>
      <Panel
        header={`${data.degree} - ${data.school}`}
        key={`panel-${data.degree}`}
        style={{ marginBottom: "10px" }}
      >
        <Row style={{ marginTop: "10px" }}>
          <Grid span={12}>
            <Input
              id="school"
              placeholder="School"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </Grid>
          <Grid span={12}>
            <Input
              id="degree"
              placeholder="Degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
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
      </Panel>
    </Collapse>
  );
};

export default EducationCard;
