import { Row, Card } from "antd";
import {
  DragDrop,
  EducationCard,
  EducationDTO,
  Grid,
  LiDrop,
  ProfessionalCard,
  ProfessionalDTO,
} from "../../components";
import { Input } from "antd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const ResumeForm: React.FC<{}> = () => {
  const { TextArea } = Input;
  const initialEucations: EducationDTO[] = [
    { city: "Castro", degree: "Sistemas", description: "", school: "INEC" },
    { city: "Ponta Grossa", degree: "BCC", description: "", school: "UTFPR" },
  ];

  const initialJobs: ProfessionalDTO[] = [
    {
      jobTitle: "Fullstack developer",
      employer: "Faceboook",
      description: "",
      city: "California",
    },
    {
      jobTitle: "Fullstack developer",
      employer: "Google",
      description: "",
      city: "California",
    },
  ];

  const [educations, setEducations] = useState(initialEucations);
  const [jobs, setJobs] = useState(initialJobs);

  function handleOnDragEndEducation(result: any) {
    if (!result.destination) return;

    const items = Array.from(educations);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setEducations(items);
  }

  function handleOnDragJobs(result: any) {
    if (!result.destination) return;

    const items = Array.from(jobs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setJobs(items);
  }

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
        <DragDrop onDragEnd={handleOnDragEndEducation} droppableId="educations">
          {educations.map((education, index) => {
            return (
              <Draggable
                key={education.degree}
                draggableId={education.degree}
                index={index}
              >
                {(provided) => (
                  <LiDrop
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <EducationCard data={education} />
                  </LiDrop>
                )}
              </Draggable>
            );
          })}
        </DragDrop>
      </Card>
      <Card title="Employment History" style={{ marginTop: "10px" }}>
        <DragDrop onDragEnd={handleOnDragJobs} droppableId="jobs">
          {jobs.map((job, index) => {
            return (
              <Draggable
                key={`${job.jobTitle}-${job.employer}`}
                draggableId={`${job.jobTitle}-${job.employer}`}
                index={index}
              >
                {(provided) => (
                  <LiDrop
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ProfessionalCard data={job} />
                  </LiDrop>
                )}
              </Draggable>
            );
          })}
        </DragDrop>
      </Card>
    </div>
  );
};

export default ResumeForm;
