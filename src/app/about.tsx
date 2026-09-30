import Constants from 'expo-constants';

import { Body, Card, Heading, Screen, SectionTitle } from '../components/ui';

export default function AboutScreen() {
  return (
    <Screen>
      <Heading>Reason for Hope</Heading>
      <Body muted>Version {Constants.expoConfig?.version ?? '1.0.0'}</Body>
      <Body>
        Reason for Hope helps Christians understand and share the reasons for their faith, and helps seekers explore
        the evidence for Christianity. Each topic gives a short answer, key points, responses to common objections,
        Scripture, and links to trusted resources for further study.
      </Body>

      <SectionTitle>Scripture</SectionTitle>
      <Card>
        <Body>
          Quoted verses are from the World English Bible (WEB), which is in the public domain. Tap any verse to read
          it in context and in other translations on Bible Gateway.
        </Body>
      </Card>

      <SectionTitle>Resources</SectionTitle>
      <Card>
        <Body>
          Topic summaries in this app are original. Links point to Got Questions, CARM, Precept Austin, Enduring
          Word, Wesley Huff, Bible Gateway and Logos for further study. Their content belongs to their respective
          owners, and this app is not affiliated with or endorsed by them.
        </Body>
      </Card>

      <SectionTitle>Privacy</SectionTitle>
      <Card>
        <Body>
          This app does not collect, store or share any personal data. Saved topics are stored only on your device.
          No accounts, analytics or tracking.
        </Body>
      </Card>
    </Screen>
  );
}
