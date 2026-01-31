import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 – Convert a short daily greeting phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('aayuboovan! Oyaata kohomadha?');

  await expect(outputBox).toContainText(
    'ආයුබෝවන්! ඔයාට කොහොමද?',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0002 – Polite request question', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('karunaakaralaa mata podi udhavvak karanna puluvandha?');

  await expect(outputBox).toContainText(
    'කරුනාකරලා මට පොඩි උදව්වක් කරන්න පුලුවන්ද?',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0003 – Simple present tense statement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mama dhaen vaeda karanavaa.');

  await expect(outputBox).toContainText(
    'මම දැන් වැඩ කරනවා.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0004 – Past tense daily sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mama iiyee hodhata nidhaagaththaa.');

  await expect(outputBox).toContainText(
    'මම ඊයේ හොදට නිදාගත්තා.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0005 – Future intention sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('api heta pansal yamu.');

  await expect(outputBox).toContainText(
    'අපි හෙට පන්සල් යමු.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0006 – Compound sentence with connector ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mama gedhara yanavaa  haebaeyi dhaen vahina nisaa tikak parakku velaa yanavaa.');

  await expect(outputBox).toContainText(
    'මම ගෙදර යනවා  හැබැයි දැන් වහින නිසා ටිකක් පරක්කු වෙලා යනවා',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0007 – Complex conditional (if/otherwise)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('oyaalaa enavanam api kanna yamu naethnam api passe kamu.');

  await expect(outputBox).toContainText(
    'ඔයාලා එනවනම් අපි කන්න යමු නැත්නම් අපි පස්සෙ කමු',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0008 – Repeated words for emphasis', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('tika tika ahalaa balamu.');

  await expect(outputBox).toContainText(
    'ටික ටික අහලා බලමු.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0009 – Imperative instruction', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('issarahata yanna!');
  await expect(outputBox).toContainText(
    'ඉස්සරහට යන්න!',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0010 – Negative form sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('mata eeka karanna baee.');
  await expect(outputBox).toContainText(
    'මට ඒක කරන්න බෑ.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0011 – Pronoun variation (they)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('eyaalaa dhaen paasael yanne.');
  await expect(outputBox).toContainText(
    'එයාලා දැන් පාසැල් යන්නෙ.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0012 – Plural form and request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('api okkoma enavaa, eeka poddak balanna puluvandha?');
  await expect(outputBox).toContainText(
    'අපි ඔක්කොම එනවා, ඒක පොඩ්ඩක් බලන්න පුලුවන්ද?',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0013 – Common collocation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('mama kaeema kanna yanavaa.');
  await expect(outputBox).toContainText(
    'මම කෑම කන්න යනවා.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0014 – Sengmented words sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('mama gedhara yanavaa.');
  await expect(outputBox).toContainText(
    'මම ගෙදර යනවා.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0015 – Mixed English abbreviations (supported)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('meeting eka 12.00 noon set karalaa, ETA eka message ekakin kiyanna.');
  await expect(outputBox).toContainText(
    'meeting එක 12.00 noon සෙට් කරලා, ETA එක message එකකින් කියන්න.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0016 – Currency with decimal', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('Rs. 250.75 vagea gaanak.');
  await expect(outputBox).toContainText(
    'Rs. 250.75 වගේ ගානක්.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0017 – Date format ISO', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('2026-05-21 venidhaa mama leave gannavaa, oyaa OK dha?');
  await expect(outputBox).toContainText(
    '2026-05-21 වෙනිදා මම leave ගන්නවා, ඔයා OK ද?',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0018 – Units of measurement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('2kg rice saha 500ml milk ganna.');
  await expect(outputBox).toContainText(
    '2kg rice සහ 500ml milk ගන්න.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0019 – Multiple spaces formatting', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('mama   gedhara   innee  dhaen.');
  await expect(outputBox).toContainText(
    'මම   ගෙදර   ඉන්නේ  දැන්.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0020 – Line breaks in input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('api passee.kathaa karamu.oyaa free dha?');
  await expect(outputBox).toContainText(
    'අපි පස්සේ.කතා කරමු.ඔයා free ද?',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0021 – Long paragraph with mixed English terms', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('adha udhee idhan vahinavaa. mama office yanna  bus stop ekata velaa innee. passe manager mata call karalaa kivuvahama,udhee Zoom meeting eka havasa 3pm dhaalaa thiyenavaa kiyalaa. mama aayeth gedhara giyaa.');
  await expect(outputBox).toContainText(
    'අද උදේ ඉදන් වහිනවා. මම office යන්න  bus stop එකට වෙලා ඉන්නේ. පස්සෙ manager මට call කරලා කිවුවහම,උදේ Zoom meeting එක හවස 3pm දාලා තියෙනවා කියලා. මම ආයෙත් ගෙදර ගියා.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0022 – Long input with currency, date and ranges', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('mee vagee report ekak print karalaa dhenna. page 1-5 athara tables thiyenavaa. total cost eka USD 1500 vagee. 25/12/2026 venidhaa deliver karanna oona. eeka hariyata check karalaa, errors thiyenavanam mata kiyanna.');
  await expect(outputBox).toContainText(
    'මේ වගේ report එකක් print කරලා දෙන්න. page 1-5 අතර tables තියෙනවා. total cost එක USD 1500 වගේ. 25/12/2026 වෙනිදා deliver කරන්න ඕන. ඒක හරියට check කරලා, errors තියෙනවනම් මට කියන්න.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0023 – Informal slang command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('ela machan! adha exam eka supiri vidhihata karapan.');
  await expect(outputBox).toContainText(
    'එල මචන්! අද exam එක සුපිරි විදිහට කරපන්.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0024 – Response phrase (agreement)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('ov eeka hari.');
  await expect(outputBox).toContainText(
    'ඔව් ඒක හරි.',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0001 – Joined words without spaces', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('oyakohomada');

  await expect(outputBox).toContainText(
    'ඔයා කොහොමද.',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0002 – Heavy spelling errors', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mama gdhra ynwa hbai dn ynne na');
  
  await expect(outputBox).toContainText(
    'මම ගෙදර යනවා හැබැයි දැන් යන්නේ නැ',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0003 – Random symbols remain in output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mata udhavvak oone ### @@@ poddak');
  
  await expect(outputBox).toContainText(
    'මට උදව්වක් ඕන පොඩ්ඩක්',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0004 – Emoji disrupts conversion consistency', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('oyata hari dha 🙂 api yamu');
  
  await expect(outputBox).toContainText(
    'ඔයාට හරි ද? අපි යමු',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0005 – Mixed capitalization breaks mapping', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('MaTa PaADuWe iNNa DeNnA');
  
  await expect(outputBox).toContainText(
    'මට පාඩුවෙ ඉන්න දෙන්න',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0006 – Ambiguous short input yields wrong meaning', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('ba');
  
  await expect(outputBox).toContainText(
    'බෑ',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0007 – Repeated letters create extra Sinhala characters', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('koheda yanneeeeeee');
  
  await expect(outputBox).toContainText(
    'කොහෙද යන්නේ',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0008 – Missing vowels breaks word formation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mta udhvk krnna plvnd');
  
  await expect(outputBox).toContainText(
    'මට උදව්වක් කරන්න පුළුවන්ද',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0009 – Multiple blank lines distort structure', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('api yamu.oyaata puluvandha?mama dhaen innee.');
  
  await expect(outputBox).toContainText(
    'අපි යමු.ඔයාට පුළුවන්ද?මම දැන් ඉන්නේ.',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0010 – Abbreviation handling inconsistent (QR/OTP)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('QR code eka scan karala OTP eka dhenna.');
  
  await expect(outputBox).toContainText(
    'QR code එක scan කරලා OTP එක දෙන්න.',
    { timeout: 15000 }
  );
});


test('Pos_UI_0001 – Real-time conversion (Live typing)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.click();
  await inputBox.type('mama paadam karanna yanavaa.', { delay: 120 });
  await expect(outputBox).toContainText(
    'මම පාඩම් කරන්න යනවා.',
    { timeout: 15000 }
  );
});