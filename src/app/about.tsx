import Constants from 'expo-constants';

import { Body, Card, Heading, Screen, SectionTitle } from '../components/ui';
import { NIV_COPYRIGHT } from '../data/bible/translations';

export default function AboutScreen() {
  return (
    <Screen>
      <Heading>Salt and Grace</Heading>
      <Body muted>Version {Constants.expoConfig?.version ?? '1.0.0'}</Body>
      <Body>
        Salt and Grace helps Christians understand and share the reasons for their faith, and helps seekers explore
        the evidence for Christianity. Each topic gives a short answer, key points, responses to common objections,
        Scripture, and links to trusted resources for further study.
      </Body>

      <SectionTitle>Scripture</SectionTitle>
      <Card>
        <Body>
          Verses are quoted from the New International Version by default. You can switch to the King James Version
          or World English Bible (both public domain), or choose another translation to read on Bible Gateway. Tap any
          verse to read it in context.
        </Body>
        <Body muted style={{ fontSize: 13, lineHeight: 19 }}>
          {NIV_COPYRIGHT}
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
