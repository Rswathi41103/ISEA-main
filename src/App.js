import React from 'react';
import './App.css';
import Card from './Components/Card/Card';

function App() {
  const speakers = [
    {
      date: 'Pre-Conference Talk: 27.02.2020, Thursday, 05.00 PM',
      image: 'https://event.iitg.ac.in/isap2020/assets/img/WeiShuangqing-600.jpeg',
      name: 'Shuangqing Wei',
      university: 'Louisiana State University, USA',
      title: 'Tradeoff between Disclosable and Private Latent Information Revealed via Compressed One: an ADMM-Based Approach',
      abstract: 'In this talk, we will present results attained recently about seeking the optimal tradeoff between disclosable and private information revealed through compressed messages. To do so, we opt to adopt mutual information as a measure of information leakage and compression rate. We note how the original information bottleneck (IB) method could be considered as a possible approach solving the problem. We then discuss how the non-convex nature of our problem makes the IB approach problematic. To address such issues, we propose to introduce a set of auxiliary variables in order to exploit the resulting structure in the transformed objective function, which makes our problem amenable to the Alternating Direction Method of Multipliers (ADMM) framework. Further justification is provided as to the improved local convergence of our proposed randomized ADMM algorithm. Our proposed two different ADMM-based algorithms are then compared with the approach inspired by the original IB setting. Numerical results have provided strong evidence as to the advantages of using our algorithms.',
      bio: 'Dr. Shuangqing Wei received the B.E. and M.E. degrees in electrical engineering from Tsinghua University in China in 1995 and 1998, respectively. He started his academic career at Louisiana State University (LSU) after receiving Ph.D. from the University of Massachusetts, Amherst in 2003. He is currently a Tenured Professor at the School of Electrical Engineering and Computer Science at LSU and holds Michel B. Voorhies Distinguished Professorship. He is a Senior Member of IEEE and an Editor for the journal IEEE Access. He has served as a Technical Program Committee (TPC) Member for numerous IEEE Flagship communication conferences, such as ICC, Globecom, and MILCOM. His research has been funded by the NSF, AFRL, DOE, and the Board of Regents of Louisiana. His current research interests are mainly about developing fundamental limits of statistical inferences and practical algorithms attaining such limits. He is particularly interested in applying such theoretical studies to complex systems and networks under constraints imposed due to privacy and security concerns.',
      website: 'https://www.lsu.edu/eng/ece/people/Faculty/wei.php#'
    },
    {
      date: 'Keynote-1: 28.02.2020, Friday, 2:00 PM',
      image: 'https://event.iitg.ac.in/isap2020/assets/img/Guan_Yong.jpg',
      name: 'Yong Guan',
      university: 'Iowa State University, USA.',
      title: 'A New Quality-Time-As-An-Advantage Paradigm for Zero-Pre-Configuration Pairing Schemes for IoT Devices/Networks.',
      abstract: 'The essence of information assurance resides in the ability to establish secret keys between the legitimate communicating parties. Common approaches to key establishment include public-key infrastructure, key-distribution centers, physical-layer security, or key extraction from common randomness. Of these, the latter two are based on specific natural advantages that the legitimate parties hold over their adversaries – most often, such advantages rely on superior or privileged communication channels. Our efforts in this work tackle a key-establishment protocol that relies on a completely different type of advantage: time. The protocol builds on the idea that when two devices are able to spend a pre-determined, mostly uninterrupted, interval of time in the company of each other, and when such a feat is outside the capability of any realistic attacker, then the legitimate parties should be able to establish a secret key without any prior common information. In this talk, we will present a basic efficient time-based key establishment protocol, and demonstrate how it can be extended to follow customized information transfer functions and deal with predictable fluctuations of wireless interference. This line of research starting from our Adopted-Pet protocol to several most recent developed techniques, has created an exciting set of research opportunities and new paradigm in securing the next-generation wireless networks such as IoT and 5G systems.',
      bio: 'Dr. Yong Guan is a professor of Electrical and Computer Engineering, the Associate Director for Research of Information Assurance Center at Iowa State University, and Cyber Forensics Coordinator of the NIST Center of Excellence in Forensic Sciences – CSAFE. He received his Ph.D. degree in Computer Science from Texas A&M University in 2002, MS and BS degrees in Computer Science from Peking University in 1996 and 1990, respectively. With the support of NSF, IARPA, NIST, and ARO, his research focuses on security and privacy issues, including digital forensics, network security, and privacy-enhancing technologies for the Internet. The resulted solutions have addressed issues in attack attribution, secure network coding, key management, localization, computer forensics, anonymity, and online frauds detection. He served as the general chair of 2008 IEEE Symposium on Security and Privacy (Oakland 2008, the top conference in security), co-organizer for ARO Workshop on Digital Forensics, and the co-coordinator of Digital Forensics Working Group at NSA/DHS CAE Principals Meetings. Dr. Guan has been recognized by awards including NSF Career Award, ISU Award for Early Achievement in Research, the Litton Industries Professorship, and the Outstanding Community Service Award of IEEE Technical Committee on Security and Privacy.',
      website: 'http://home.engineering.iastate.edu/~guan/'
    },
    {
      date: 'Keynote-2: 29.02.2020, Saturday, 9:30 AM',
      image: 'https://event.iitg.ac.in/isap2020/assets/img/prabhat.jpg',
      name: 'Prabhat Mishra',
      university: 'University of Florida, USA.',
      title: 'Securing Hardware for Designing Trustworthy Systems.',
      abstract: 'System-on-Chip (SoC) is the brain behind computing and communication in a wide variety of systems, starting from simple electronic devices in smart homes to complex navigation systems in airplanes. Reusable hardware Intellectual Property (IP) based SoC design has emerged as a pervasive design practice in the industry to dramatically reduce SoC design and verification cost while meeting aggressive time-to-market constraints. Growing reliance on these pre-verified hardware IPs, often gathered from untrusted third-party vendors, severely affects the security and trustworthiness of computing platforms. These IPs may come with deliberate malicious implants to incorporate undesired functionality, undocumented test/debug interface working as hidden backdoor, or other integrity issues. It is crucial to evaluate the integrity and trustworthiness of third-party IPs for designing trustworthy systems. In this talk, I will introduce a wide variety of hardware security vulnerabilities, design-for-security solutions, and possible attacks and countermeasures. I will briefly describe how the complementary abilities of simulation-based validation, formal verification as well as side channel analysis can be effectively utilized for comprehensive SoC security and trust validation. The talk will conclude with a discussion on application-specific security solutions as well as future hardware security challenges.',
      bio: 'Prabhat Mishra is a Professor in the Department of Computer and Information Science and Engineering at the University of Florida. He is a UF Preeminence Term Professor, the Research Director of the Nelms Institute for the Connected World, and a member of the Florida Institute of Cybersecurity. He received his Ph.D. in Computer Science and Engineering from the University of California at Irvine in 2004. His research interests include embedded and cyber-physical systems, hardware security and trust, energy-aware computing, formal verification, system-on-chip validation, and quantum computing. He has published 7 books, 25 book chapters, 12 patents/copyrights, and more than 150 research articles in premier international journals and conferences. His research has been recognized by several awards including the NSF CAREER Award, IBM Faculty Award, ten best paper awards and nominations, and EDAA Outstanding Dissertation Award. Prof. Mishra currently serves as an Associate Editor of ACM Transactions on Design Automation of Electronic Systems and IEEE Transactions on VLSI Systems. He is an ACM Distinguished Scientist and a Senior Member of IEEE.',
      website: 'https://www.cise.ufl.edu/~prabhat/'
    },
    {
      date: 'Keynote-3: 29.02.2020, Saturday, 2:00 PM',
      image: 'https://event.iitg.ac.in/isap2020/assets/img/RamiPezus.jpg',
      name: 'Rami Puzis',
      university: 'Ben Gurion University, Israel.',
      title: 'Mastering the Social Networks.',
      abstract: 'Online social networks are abundant sources of information and are ubiquitous interaction mediums. Low communication barriers make them a treasure mine of personal information. The many tools for social network analysis and mining are used by both adversaries and law enforcement in a constant cat and mouse game. For example, link prediction algorithms can be used to identify acquaintances that a person would rather not expose and the same algorithms can be used to pinpoint intruders. Fake profiles are used by terrorists and criminal organizations and by those who hunt them down. It is important to identify influencers for planning an appropriate brand managing campaign and for efficient disinformation spreading. And the list continues. This talk will discuss various problems, tools, and algorithms for social network analysis, framing them in set of pre-attack activities performed by a hacker trying to infiltrate a target organization.',
      bio: ' Rami Puzis received the BSc (honors) degree in software engineering, and the MSc (honors) and PhD (honors) degrees in information systems engineering, all from Ben-Gurion University. He is a senior lecturer (assistant prof.) with the Department of Software and Information Systems Engineering, Ben-Gurion University. He was a post-doctoral research associate with the Lab for Computational Cultural Dynamics, University of Maryland. His main research interests include network analysis and network mining with applications to security, social networks, biological networks, and computer communication. Over the past years, he has managed multiple research projects funded by Deutsche Telekom AG, Dell-EMC, Verint, IBM, Amdocs, Israeli Ministry of Defense, Israeli Ministry of Trade and Commerce, and leading cybersecurity industries in Israel. His recent research projects focused on web intelligence, cyber threat intelligence, security awareness, metabolic pathway prediction, and disinformation in social networks.',
      website: 'https://faramirp.wixsite.com/puzis'
    },
    {
      date: 'Keynote-4: 01.03.2020, Sunday, 11:45 AM',
      image: 'https://event.iitg.ac.in/isap2020/assets/img/Barua_Consoli_07_420x500.jpg',
      name: 'Rajeev Barua',
      university: 'University of Maryland, USA.',
      title: 'Malware Analysis: Beating the Bad Guys.',
      abstract: "The battle between malware writers and malware detection teams is an arms race that is not letting up. Malware writers constantly devise new ways of exploiting system vulnerabilities, and new methods to hide from detection. In response malware detection teams have responded with new technologies to detect malware. This talk will overview the latest industry trends in malware detection, and discuss some of the latest research in the author's research group and company. We will discuss how malware hides from detection, and how to turn the tables on malware.",
      bio: "Dr. Rajeev Barua is a Professor of Electrical and Computer Engineering at the University of Maryland. He is also the Founder and CEO of Second Write LLC, which commercializes binary rewriting technology his research group developed at the university. He received his Ph.D in Computer Science and Electrical Engineering from the Massachusetts Institute of Technology in 2000. Dr. Barua is a recipient of the NSF CAREER award in 2002, and of the UMD George Corcoran Award for teaching excellence in 2003, and the UMD Jimmy Lin Award for innovation in 2014. He was a finalist for the Inventor of the Year Award in 2005 given by the Office of Technology Commercialization at the University of Maryland. He received the President of India Gold Medal for graduating from the Indian Institute of Technology during his B.Tech graduation in 1992 with the highest GPA in the university that year. Over the years, he has served on several NSF panels and on the program committees of several leading academic conferences. Dr. Barua's research interests are in the areas of program analysis, cyber security, binary rewriters, embedded systems, and computer architecture.",
      website: 'https://ece.umd.edu/clark/faculty/361/Rajeev-Barua'
    }
  ];

  return (
    <>
      <h1 className="heading">Keynote Speakers</h1>
      <div className="container">
        {speakers.map((speaker, index) => (
          <Card key={index} speaker={speaker} />
        ))}
      </div>
    </>
  );
}

export default App;
