import { Selector } from 'testcafe';

const googleLogo = Selector('img[alt="Google"]');

fixture `Issue POC`
    .meta('issue', 'true')
    .page('https://www.google.com');

test('Show issue', async t => {
    await t
        .expect(googleLogo.exists)
        .ok();
});
