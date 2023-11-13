import type { Preview } from '@storybook/react';
import { Title, Subtitle, Description, Primary, Controls, Stories, Markdown } from '@storybook/blocks';

// global styles
import '../src/alert/alert.styles.scss';
import '../src/button/button.styles.scss';
import '../src/content-card/content-card.styles.scss';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            page: () => (
                <>
                    <Title />
                    <Primary />
                    <Controls />
                </>
            ),
        },
    },
};

export default preview;
