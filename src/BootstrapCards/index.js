import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css'
function OrganCards() {
  return (
    <>
    <h1>Donated Organs</h1>
    <div className="bootstrap-card-organs">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/man-holding-heart-illustration-against-gray-wall_46527-387.jpg?w=1060" />
      <Card.Body>
        <Card.Title>Heart</Card.Title>
        <Card.Text>
        Your heart’s electrical system controls the rate and rhythm of your heartbeat. 
        A healthy heart supplies your body with the right amount of blood at the rate needed to work well.
         If disease or injury weakens your heart, your body’s organs will not receive enough blood to work normally.
          A problem with the electrical system — or the nervous or endocrine systems.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/lung-banner-respiratory-system-smart-healthcare_53876-104198.jpg?w=1060&t=st=1671193146~exp=1671193746~hmac=65e594ca5309807258ec1248c7387addefa84de56a64e9af9728ab949f3dbc5d" />
      <Card.Body>
        <Card.Title>Lungs</Card.Title>
        <Card.Text>
        When you inhale (breathe in), air enters your lungs, and oxygen from that air moves to your blood.
         At the same time, carbon dioxide, a waste gas, moves from your blood to the lungs and is exhaled (breathed out). 
        This process, called gas exchange, is essential to life. 
        Healthy lifestyle habits, such as physical activity and not smoking, can help prevent lung injury and disease.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/doctor-looks-liver-hologram-checks-test-result-virtual-interface-analyzes-data-liver-disease-donation-innovative-technologies-medicine-future_99433-6556.jpg?w=1060" />
      <Card.Body>
        <Card.Title>Liver</Card.Title>
        <Card.Text>
        Your liver is the largest internal organ in your body -- and has a bunch of important jobs to do.
         It filters out dangerous chemicals, helps break down the food you eat, and builds proteins that keep your body in good repair.
         It's a dark red wedge about the size of a football that weighs around 3 pounds. 
         It's made up of two parts called lobes -- a smaller left lobe
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/06/b9/db/06b9db421ac2a90fd579e48825def62d.jpg"  className="eye-organ-image"/>
      <Card.Body>
        <Card.Title>Eyes</Card.Title>
        <Card.Text>
        First, light passes through the cornea (the clear front layer of the eye). The cornea is shaped like a dome and bends light to help the eye focus.

Some of this light enters the eye through an opening called the pupil (PYOO-pul). The iris (the colored part of the eye) controls how much light the pupil lets in.

Next, light passes through the lens (a clear inner part of the eye)
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/doctor-looks-kidney-hologram-checks-test-result-virtual-interface-analyzes-data-kidney-disease-stones-innovative-technologies-medicine-future_99433-6553.jpg?w=1060" />
      <Card.Body>
        <Card.Title>Kidneys</Card.Title>
        <Card.Text>
        Healthy kidneys filter about a half cup of blood every minute, removing wastes and extra water to make urine. 
        The urine flows from the kidneys to the bladder through two thin tubes of muscle called ureters, one on each side of your bladder.
         Your bladder stores urine. Your kidneys, ureters, and bladder are part of your urinary tract.
         Your kidneys remove wastes and extra fluid from your body
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-vector/pancreas-isolated-white-background-medicine-concept-flat-vector-cartoon-illustration_194782-354.jpg?w=900" />
      <Card.Body>
        <Card.Title>Pancreas</Card.Title>
        <Card.Text>
        The exocrine cells produce digestive juices – about 1.5 to 2 liters per day. They are called exocrine ("secreting outside") because the digestive juices that they produce flow out into the small intestine rather than directly into the bloodstream.
        Proteases to break down proteins
Amylases to break down carbohydrates
         
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-vector/intestines-realistic-3d-vector-illustration-small-large-intestine-human-internal-organ-digestive-tract-vector-illustration-isolated-white-background_545793-923.jpg?w=740" />
      <Card.Body>
        <Card.Title>Intenstine</Card.Title>
        <Card.Text>
        Food broken down by the stomach moves into the small intestine, which absorbs nutrients and sends them into the bloodstream.
        The small intestine also supports the immune system.
         As an older studyTrusted Source, from 2011, 
         suggests, the small intestine’s
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/biological-hierarchy-composition_1284-54333.jpg?w=740&t=st=1674988784~exp=1674989384~hmac=d9709a1102624b61b2177ae77f7d12dd67ab4833ae73fb54ffb5a9650dc24f83" />
      <Card.Body>
        <Card.Title>Tissues</Card.Title>
        <Card.Text>
        Tissue donation refers to the process of a deceased person donating part of their body for use in a transplant procedure to repair a recipients physical injury or trauma.
         Examples of donated tissues include heart valves, bone, tendons, veins/arteries and skin. 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> 
    </div> 

    </>
  );
}

export default OrganCards;