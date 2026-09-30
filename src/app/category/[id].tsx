import { router, Stack, useLocalSearchParams } from 'expo-router';

import { Body, Heading, Row, Screen } from '../../components/ui';
import { categoryById } from '../../data/categories';
import { topicsInCategory } from '../../data/topics';
import type { CategoryId } from '../../data/types';

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const category = categoryById[id as CategoryId];

  if (!category) {
    return (
      <Screen>
        <Body>Category not found.</Body>
      </Screen>
    );
  }

  return (
    <Screen>
      <Stack.Screen options={{ title: category.title }} />
      <Heading>{category.title}</Heading>
      <Body muted>{category.subtitle}</Body>
      {topicsInCategory(category.id).map((topic) => (
        <Row
          key={topic.id}
          title={topic.title}
          subtitle={topic.question}
          onPress={() => router.push(`/topic/${topic.id}`)}
        />
      ))}
    </Screen>
  );
}
