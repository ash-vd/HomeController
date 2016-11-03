/*
 * Notifications Messages
 *
 * This contains all the text for the Notifications component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  message: {
    id: 'app.components.Notifications.message',
    defaultMessage: `You have {number} new {number, plural,
                      one {message}
                      other {messages}
                    }`,
  },
});
