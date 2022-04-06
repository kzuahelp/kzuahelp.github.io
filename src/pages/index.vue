<script lang="ts" setup>
//// Meta
import { Head } from '@vueuse/head'

//// Components
import ActionSection from '../components/ActionSection.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Map from '../components/Map.vue'
import Navigation from '../components/Navigation.vue'
import NavigationChoice from '../components/NavigationChoice.vue'
import Person from '../components/Person.vue'
import Card from '../components/Card.vue'
import Socials from '../components/Socials.vue'

// Accordion
import {
  VueCollapsiblePanelGroup,
  VueCollapsiblePanel,
} from '@dafcoe/vue-collapsible-panel'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'

//// Localization
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  inheritLocale: true
})
</script>

<template>
  <Head>
    <title>{{ t('title') }}</title>
  </Head>
  <Header />
  <Navigation>
    <NavigationChoice :step="1" :title="t('give-things')" link="#give-things"></NavigationChoice>
    <NavigationChoice :step="2" :title="t('send-money')" link="#send-money"></NavigationChoice>
    <NavigationChoice :step="3" :title="t('become-volunteer')" link="#become-volunteer"></NavigationChoice>
  </Navigation>
  <div :class="$style.limiter">
    <!-- Our mission -->
    <section :class="$style.section">
      <h2 :class="$style.title" id="our-mission">{{ t('our-mission') }}</h2>
      <div :class="$style.grouped">
        <div :class="$style.panel">
          <div v-html="t('our-mission-description')" />
          <Socials />
        </div>
        <div :class="$style.gallery">
          <ul :class="$style.images">
            <li :class="$style.image">
              <img src="/photos/1.jpg" />
            </li>
            <li :class="$style.image">
              <img src="/photos/2.jpg" />
            </li>
            <li :class="$style.image">
              <img src="/photos/3.jpg" />
            </li>
            <li :class="$style.image">
              <img src="/photos/4.jpg" />
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- How can you help -->
    <section :class="$style.section">
      <h2 :class="$style.title" id="how-can-you-help">{{ t('how-can-you-help') }}</h2>
      <ActionSection
        :class="$style['action-section']"
        id="give-things"
        :number="1"
        :title="t('give-things')"
        icon="#icon-box"
      >
        <div :class="$style.grouped">
          <div :class="$style.panel">
            <div :class="$style.panel">
              <vue-collapsible-panel-group accordion :class="$style.accordion">
                <vue-collapsible-panel :expanded="false">
                  <template #title>{{ t('medicines') }}</template>
                  <template #content>
                    <ul>
                      <li>Актовегин</li>
                      <li>Аминокапроновая кислота</li>
                      <li>Анальгин</li>
                      <li>Анаприлин Пропранол</li>
                      <li>Аскорбиновая кислота</li>
                      <li>Баралгин</li>
                      <li>Биовен</li>
                      <li>Бисопролол</li>
                      <li>Бриллиантовый зеленый</li>
                      <li>Бромгексидин</li>
                      <li>Валериана</li>
                      <li>Валерьяна настойка</li>
                      <li>Гептрал пор.</li>
                      <li>Гидазепам</li>
                      <li>Глюкоза 5%</li>
                      <li>Гроприносил сироп</li>
                      <li>Губка</li>
                      <li>Диазолин драже</li>
                      <li>Дицинон</li>
                      <li>Жгут кровоостанавливающий резиновый</li>
                      <li>Жгут кровоостанавливающий эластичный</li>
                      <li>Йод, спиртовой раствор</li>
                      <li>Каптоприл</li>
                      <li>Карбамазепин</li>
                      <li>Катетер Фолея латексный</li>
                      <li>Кетонал</li>
                      <li>Комплинекс</li>
                      <li>Корвалол</li>
                      <li>Короним</li>
                      <li>Мелоксикам</li>
                      <li>Мелоксикам</li>
                      <li>Меронем 1.0</li>
                      <li>Метотрексат ебеве</li>
                      <li>Мешок амбу однократно</li>
                      <li>Мовалис амп.</li>
                      <li>Натрия Хлорид</li>
                      <li>Омепразол</li>
                      <li>Омепразол капс.</li>
                      <li>Парацетамол</li>
                      <li>Панкреатин</li>
                      <li>Пеленки для недоношенных детей</li>
                      <li>Преднизолон</li>
                      <li>Регидрон пор.</li>
                      <li>Сиофор</li>
                      <li>Смекта</li>
                      <li>Термометр без контактный</li>
                      <li>Термометр электронный</li>
                      <li>Термометры детские</li>
                      <li>Тотема</li>
                      <li>Транма (транексамовая кислота)</li>
                      <li>Тренакса</li>
                      <li>Урсофальк суспензия</li>
                      <li>Физиотенз</li>
                      <li>Флебодиа</li>
                      <li>Флоксал</li>
                      <li>Цераксон</li>
                      <li>Церебролизин</li>
                      <li>Ципрофлоксацин</li>
                      <li>Энфин</li>
                    </ul>
                  </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                  <template #title>{{ t('food') }}</template>
                  <template #content>
                    <ul>
                      <li>Энергетические батончики</li>
                      <li>Смесь сухого молока</li>
                      <li>Кофе/чай</li>
                      <li>Супы быстрого приготовл.</li>
                      <li>Каши</li>
                      <li>Печенье фасованое</li>
                      <li>Крупы (гречка/рис/пшено)</li>
                      <li>Макаронные изделия</li>
                      <li>Консервы (рыбные/мясные)</li>
                      <li>Сгущенное молоко</li>
                      <li>Орехи</li>
                      <li>Сухофрукты</li>
                      <li>Сахар/соль</li>
                      <li>Колбаса сырокопченая</li>
                    </ul>
                  </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="false">
                  <template #title>{{ t('for-childs') }}</template>
                  <template #content>
                    <ul>
                      <li>Детские смеси</li>
                      <li>Каши быстрого приготовления</li>
                      <li>Соски/ баночки</li>
                      <li>Крем заморозка (силикон.для зубов)</li>
                      <li>Крем/ присыпка</li>
                      <li>Шампунь /мыло</li>
                      <li>Судокрем</li>
                      <li>Термометр</li>
                      <li>Комбинезон слип</li>
                      <li>Теплые конверты</li>
                      <li>Теплые комбинезоны</li>
                      <li>Ползунки/колготки</li>
                      <li>Пеленки/памперсы</li>
                      <li>Пеленки для недоношенных детей</li>
                      <li>Термоодежа</li>
                      <li>Обувь</li>
                      <li>Карандаши/фломастеры/раскраски</li>
                    </ul>
                  </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="false">
                  <template #title>{{ t('field-medicine') }}</template>
                  <template #content>
                    <ul>
                      <li>Power bank</li>
                      <li>Армированный скотч</li>
                      <li>Бандажи (обычные/абдоминальные)</li>
                      <li>Гемостатик типа quick clot combat</li>
                      <li>Гидрогелевые противоожоговые повязки</li>
                      <li>Зубна паста/ Одноразовая бритва</li>
                      <li>Кариматы</li>
                      <li>Кровоостанавливающие гемостатические бинты. Проверенные фирмы бинтов: кровоспас из локального. Combat Gauze quick clot, Celox gauze, Chito Gauze</li>
                      <li>Мягкие носилки</li>
                      <li>Назофарингеальные трубки Rusch</li>
                      <li>Ножницы для разрезания одежды или стропорез</li>
                      <li>Окклюзионные пленки Halo, или hyfin, или sam</li>
                      <li>Пледы</li>
                      <li>Подсумки для аптечек ifak (и сами аптечки укомплектованные)</li>
                      <li>Спальные мешки</li>
                      <li>Турникеты CAT gen 7</li>
                      <li>Фонарики</li>
                      <li>Щиток для глаза</li>
                    </ul>
                  </template>
                </vue-collapsible-panel>
              </vue-collapsible-panel-group>
            </div>
          </div>
          <div :class="$style.panel">
            <div>{{ t('point-place') }}</div>
            <div :class="$style['place-info']">
              <svg fill="currentColor" :class="$style.icon" width="48" height="48">
                <use href="#icon-place" />
              </svg>
              <span :class="$style.text">{{ t('point-place-address') }}</span>
            </div>
            <div>{{ t('point-place-working-time') }}</div>
            <div :class="$style['place-info']">
              <svg fill="currentColor" :class="$style.icon" width="48" height="48">
                <use href="#icon-time" />
              </svg>
              <span :class="$style.text">{{ t('point-place-working-time-diapason') }}</span>
            </div>

            <div :class="$style.map">
              <Map />
            </div>
          </div>
        </div>
      </ActionSection>

      <ActionSection
        :class="$style['action-section']"
        id="send-money"
        :number="2"
        :title="t('send-money')"
        icon="#icon-money"
      >
        <div :class="$style.grouped">
          <div :class="$style.panel">
            <p>{{ t('card-to-bank') }}</p>
            <a
              :class="$style.button"
              target="_blank"
              href="https://bank.gov.ua/ua/about/humanitarian-aid-to-ukraine"
            >
              <svg fill="currentColor" :class="$style.icon" width="48" height="48">
                <use href="#icon-bank" />
              </svg>
              <span :class="$style.text">{{ t('go-to-bank-website') }}</span>
            </a>
          </div>
          <div :class="$style.panel">
            <p>{{ t('transfer-to-embasy') }}</p>
            <Card>
              ПОСОЛЬСТВО УКРАИНЫ В РЕСПУБЛИКЕ КАЗАХСТАН
              <br />БИН 020 750 015 536
              <br />РНН 600 700 130 010
              <br />ИИК – KZ68601А871002315181
              <br />в АО “Народный Банк Казахстана” г. Нур-Султан
              <br />БИК – HSBKKZKX
              <br />КБЕ 21
              <br />КНП 119
            </Card>
          </div>
        </div>
      </ActionSection>
      <ActionSection
        :class="$style['action-section']"
        id="become-volunteer"
        :number="3"
        :title="t('become-volunteer')"
        icon="#icon-group"
      >
        <div :class="$style.grouped">
          <div :class="$style.panel">
            <div v-html="t('become-volunteer-description')" />
            <a :class="$style.button" href="https://forms.gle/tZ1ATE18bHsuGGQq7">
              <svg fill="currentColor" :class="$style.icon" width="48" height="48">
                <use href="#icon-contract" />
              </svg>
              <span :class="$style.text">{{ t('volunteer-form') }}</span>
            </a>
          </div>
          <div :class="$style.gallery">
            <img :class="$style.team" src="/photos/team.jpg" />
          </div>
        </div>
      </ActionSection>
    </section>

    <!-- Our friends -->
    <section :class="$style.section">
      <h2 :class="$style.title">{{ t('our-friends') }}</h2>
      <div>
        <Person
          :name="t('arman-shuraev')"
          :position="t('arman-shuraev-position')"
          :avatar="'/avatars/1.jpg'"
          :action="t('arman-shuraev-action')"
        />
      </div>
    </section>

    <!-- Gratitude -->
    <section :class="$style.section">
      <h2 :class="$style.title">{{ t('gratitude') }}</h2>
      <div :class="$style.grouped">
        <div :class="$style.panel">
          <div v-html="t('appeal-description')" />
          <Card>
            <figure :class="$style.quote">
              <blockquote>{{ t('appeal') }}</blockquote>
              <figcaption :class="$style.author">{{ t('oksana-vrublevskaya') }}</figcaption>
            </figure>
          </Card>
        </div>
        <div :class="$style.gallery">
          <img :class="$style.team" src="/photos/oksana-vrublevskaya.jpg" />
        </div>
      </div>
    </section>
  </div>

  <Footer />
</template>

<style lang="postcss" module>
/* Accordion */
.accordion {
  --base-color: red !important;
  --border-color: rgb(var(--primary-color)) !important;
  --bg-color-header: rgb(var(--primary-color)) !important;
  --bg-color-header-hover: rgb(var(--primary-lighten-color)) !important;
  --bg-color-header-active: rgb(var(--primary-color)) !important;
  --bg-color-body: rgb(var(--on-primary-color)) !important;

  & header {
    color: rgb(var(--on-primary-color)) !important;
    height: 70px !important;
  }
}

.quote {
  font-family: "Noto Serif", Georgia, Trebuchet, serif;
  font-style: italic;
  font-weight: 400;
  margin: 0;

  & blockquote {
    margin: 0;
  }
}

.author {
  text-align: center;
  margin-top: 20px;
  color: rgb(var(--primary-color));
}

p {
  margin: 0 0 20px 0;
}

.things-list {
  margin: 6px 10px;
  list-style-type: none;
  padding: 0;
}

.button {
  padding: 20px;
  background: rgb(var(--primary-color));
  border-radius: 8px;
  /* background: #eee; */
  position: relative;
  text-decoration: none;
  color: rgb(var(--on-primary-color), 0.95);
  display: flex;
  align-items: center;
  transition: background-color 250ms ease;
  font-size: 1.5rem;
  line-height: 1;

  &:hover {
    background: rgb(var(--accent-color));
  }

  & .icon {
    width: 64px;
    height: 64px;
  }

  & .text {
    flex: 1;
    display: block;
    text-align: center;
  }
}

.action-section {
  margin-top: 40px;
}

.place-info {
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: rgb(var(--primary-color));
  margin: 10px 0;

  & .icon {
    margin-right: 10px;
    flex-shrink: 0;
  }
}

@media only screen and (max-width: 1024px) {
  .place-info {
    font-size: 1.25rem;
  }
}

.team {
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
}

.map {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  height: 580px;
  margin-bottom: 20px;
}

.section {
  margin: 40px;
}

@media only screen and (max-width: 1024px) {
  .section {
    margin: 20px;
  }
}

.limiter {
  max-width: 1280px;
  margin: 0 auto;
}

.main-description {
  text-align: center;
  font-size: 1.25rem;
}

.title {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 500;
  color: rgb(var(--accent-color));
  display: flex;
  align-items: center;
  margin: 0 0 40px;

  &::before {
    content: "";
    display: block;
    width: 100px;
    height: 28px;
    background: rgb(var(--accent-color));
    margin-right: 20px;
    border-radius: 20px;
  }
}

@media only screen and (max-width: 1024px) {
  .title {
    font-size: 1.8rem;
    margin: 0 0 20px;

    &::before {
      width: 60px;
      height: 28px;
    }
  }
}

.grouped {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  & .panel {
    flex: 1;
    font-size: 1.25rem;
  }
  & .gallery {
    flex: 1;
  }
}

@media only screen and (max-width: 1024px) {
  .grouped {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
.images {
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.image {
  background: rgba(0, 0, 0, 0.1);

  & img {
    width: 100%;
    display: block;
    border-radius: 4px;
    overflow: hidden;
  }
}

/* Accordion */
.accordion-title {
  display: block;
  background: red;
  margin: 0;
}
.accordion-content {
  margin: 0;
  overflow: hidden;
  background: blue;
}
</style>


<i18n lang="yaml">
ru-RU:
  title: "Штаб гуманитарной поддержки Украины в Казахстане"
  give-things: "Принести гуманитарную помощь"
  send-money: "Отправить деньги"
  become-volunteer: "Стать волонтёром"
  our-mission: "Наша миссия"
  our-mission-description:
    "<p>Наше движение по сбору гуманитарной помощи началось 25 февраля с заявления гражданской инициативы Ел болашағы.</p>
    <p>Ел болашағы запустил движение, организовал волонтеров, призвал казахстанцев помогать мирному населению Украины, которое прямо сейчас нуждается в экстренной гуманитарной помощи в условиях войны.</p>
    <p>С 13 марта Ел болашағы отошел от движения, и организацией гуманитарной помощи в Украину теперь занимаются сами волонтеры, обычные казахстанцы из Штаба гуманитарной поддержки Украины.</p>
    <p>На 5 марта поступило более 150 млн тенге от неравнодушных казахстанцев.</p>
    <p>Наш штаб в социальных сетях:</p>"
  how-can-you-help: "Как вы можете помочь?"
  medicines: "Медицинские приборы и лекарства"
  food: "Продукты питания"
  for-childs: "Для детей"
  field-medicine: "Полевая медицина"
  point-place: "Пункт приёма гуманитарной помощи находится в Посольстве Украины в Республике Казахстан по адресу:"
  point-place-address: "г. Астана, ул. Жылой, 12, м-н Караоктель-2"
  point-place-working-time: "Время приёма гуманитарной помощи:"
  point-place-working-time-diapason: "10:00 - 19:00 по будням, 11:00 - 16:00 по выходным"
  card-to-bank: "Переведите средства с карты в Нац. Банк Украины:"
  transfer-to-embasy: "Переведите средства на счет Посольства по реквизитам:"
  go-to-bank-website: "Перейти на сайт банка"
  become-volunteer-description:
    "<p>Штаб гуманитарной поддержки Украины проводит набор волонтеров на разные позиции.</p>
    <ul>
    <li>Физическое участие в сборе помощи — приём, упаковка, маркировка, погрузка.</li>
    <li>Онлайн участие — консультирование, SMM, дизайн, перевод, поиск информации и прочее.</li>
    <li>Организационная деятельность в сборе помощи.</li>
    </ul>
    <p>Возможно, именно ваши способности и навыки нам пригодятся.</p>"
  volunteer-form: "Заполнить анкету волонтёра"
  our-friends: "Нам помогают"
  gratitude: "Благодарность"
  appeal-description:
    "<p>Обращение супруги Посла Украины в Республике Казахстан:</p>"
  appeal:
    "Люди открывают свои домашние аптечки и несут последнее. Это невероятно. Я не ожидала, что наша трагедия так близка народу Казахстану. От имени всех украинских семей мы искренне благодарим казахстанцев за непрерывную помощь и поддержку! Это огромнейший вклад в развитие тесных отношений между нашими народами, у которых есть много общих страниц истории, в том числе трагических. Казахстан понимает нашу боль, мы чувствуем это."
  oksana-vrublevskaya: "Оксана Врублевская"
  arman-shuraev: "Арман Шураев"
  arman-shuraev-position: "Общественный деятель и предприниматель"
  arman-shuraev-action: "Поддержал инициативу Ел болашағы, организовал плов для волонтёров, которые сортировали и загружали гуманитарную помощь, выделил 1 миллион тенге на питание волонтеров."

kk-KZ:
  title: "Қазақстандағы Украинаға гуманитарлық қолдау көрсету штабы"
  give-things: "Гуманитарлық көмек әкелу"
  send-money: "Қаржылай көмек көрсету "
  become-volunteer: "Волонтёр болу"
  our-mission: "Біз жайлы"
  our-mission-description:
    "<p>Гуманитарлық көмек 25 ақпанда “Ел болашағы” қозғалысының ынтасымен басталды. </p>
    <p>Осындай әлеуметтік дағдарыс кезінде Қазақстан азаматтарын украин халқына көмек көрсетуге шақырып, барлық волонтёрлердің басын қосқан ұйым атауы “Ел болашағы”.</p>
    <p>Алайда 13-ші наурыздан бастап “Ел болашағы” бұл қозғалыспен айналысуды тоқтатты.</p>
    <p>Қазіргі таңда украиндарға септігін тигізіп жатқан гуманитарлық қолдау штабының волонтёрлері, яғни Қазақстанның қарапайым халқы.</p>
    <p>Бүгінгі ақпарат бойынша еліміздегі әрбір құштар жаннан барлығы 150 млн. ₸ ден астам қаражат түскен.<p>
    <p>Біздің әлеуметтік желілер:</p>"
  how-can-you-help: "Сіз қалай көмектесе аласыз?"
  medicines: "Медициналық бұйымдар мен дәрі-дәрмектер"
  food: "Азық-түлік"
  for-childs: "Балаларға арналған"
  field-medicine: "Дала медицинасы"
  point-place: "Гуманитарлық көмекті қабылдау пункті, Украинаның Қазақстан Республикасындағы Елшілігі, мына мекен-жай бойынша орналасқан:"
  point-place-address: "г. Астана, ул. Жылой, 12, м-н Караоктель-2"
  point-place-working-time: "Гуманитарлық көмекті қабылдау уақыты:"
  point-place-working-time-diapason: "жұмыс күндері 10:00-19:00, демалыс күндері 11:00-16:00"
  card-to-bank: "Картадан Nat-қа ақша аударыңыз. Украина банкі:"
  transfer-to-embasy: "Мына мәліметтер бойынша елшілік шотына ақша аударыңыз:"
  go-to-bank-website: "Банктің веб-сайтына өту"
  become-volunteer-description:
    "<p>Украинаға гуманитарлық қолдау штабына әртүрлі бағытта волонтёр қажет, атап айтқанда:/p>
    <ul>
    <li>Гум. көмек жинауға атсалысу - қабылдау, орау, таңбалау, тиеу..</li>
    <li>Онлайн көмек - кеңес беру, SMM, дизайн, аударма, ақпаратты іздеу және т.б.</li>
    <li>Ұйымдық көмек.</li>
    </ul>
    <p>Сіздің қабілеттеріңіз бен дағдыларыңыз бізге пайдалы болуы мүмкін.</p>"
  volunteer-form: "Волонтёр формасын толтырыңыз"
  our-friends: "Бізге қол ұшын бергендер:"
  gratitude: "Алғыс"
  appeal-description:
    "<p>Украинаның Қазақстан Республикасындағы Елшісі жұбайының жолдауы:</p>"
  appeal:
    "Халық үйіндегі соңғы дәрі-дәрімегін әкелуде. Бұл жан тебірентеді! Біздің қасірет Қазақстан азаматтарына соншалықты жақын болады деп күтпедім. Үздіксіз қолдау мен көмек үшін барлық украин отбасы атынан шын жүректен алғыс айтамыз! Бұл — тарихы ортақ, талай қуанышты күндер мен қайғыны бірге бастан кешірген екі халық арасындағы өзара қарым-қатынасты нығайтуға арналған зор қадам. Қазақстан халқы басымызға түскен ауыр кесапатты түснеді және барынша қолдау көрсетіп отыр. Біз ол көмекті сезінеміз."
  oksana-vrublevskaya: "Оксана Врублевская" 
  arman-shuraev: "Арман Шураев"
  arman-shuraev-position: "Қоғам қайраткері және кәсіпкер"
  arman-shuraev-action: "Ел болашағы” бастамасын қолдап, ауыр жұмыс атқарған волонтёрлердің тағамына 1 миллион теңге бөлген кісі."

ru-UA:
  title: "Штаб гуманітарної підтримки України у Казахстані"
  give-things: "Принести гуманітарну допомогу"
  send-money: "Відправити гроші"
  become-volunteer: "Стати волонтером"
  our-mission: "Наша місія"
  our-mission-description:
    "<p>Наш рух зі збору гуманітарної допомоги розпочався 25 лютого із заяви громадянської ініціативи Ел болашағи.</p>
    <p>Ел болашағи запустив рух, організував волонтерів, закликав казахстанців допомагати мирному населенню України, яке прямо зараз потребує екстреної гуманітарної допомоги в умовах війни.</p>
    <p>З 13 березня Ел болашағи відійшов від руху, і організацією гуманітарної допомоги в Україну тепер займаються тільки волонтери, звичайні казахстанці зі Штабу гуманітарної підтримки України.</p>
    <p>Станом на 5 березня надійшло понад 150 млн тенге від небайдужих казахстанців.</p>
    <p>Наш штаб у соціальних мережах:</p>"
  how-can-you-help: "Як ви можете допомогти?"
  medicines: "Медичні прилади та ліки"
  food: "Продукти харчування"
  for-childs: "Для дітей"
  field-medicine: "Польова медицина"
  point-place: "Пункт прийому гуманітарної допомоги знаходиться в Посольстві України в Республіці Казахстан за адресою:"
  point-place-address: "г. Астана, ул. Жылой, 12, м-н Караоктель-2"
  point-place-working-time: "Час прийому гуманітарної допомоги:"
  point-place-working-time-diapason: "10:00-19:00 по буднях, 11:00 - 16:00 у вихідні"
  card-to-bank: "Зробити переказ коштів з картки до Нац. Банку України:"
  transfer-to-embasy: "Зробити переказ коштів на рахунок Посольства за реквізитами:"
  go-to-bank-website: "Перейти на сайт банку"
  become-volunteer-description:
    "<p>Штаб гуманітарної підтримки України проводить набір волонтерів на різні позиції.</p>
    <ul>
    <li>Фізична участь у зборі допомоги - прийом, пакування, маркування, завантаження.</li>
    <li>Онлайн участь — консультування, SMM, дизайн, переклад, пошук інформації та інше.</li>
    <li>Організаційна діяльність у зборі допомоги.</li>
    </ul>
    <p>Можливо, саме Ваші здібності та навички нам знадобляться.</p>"
  volunteer-form: "Заповнити анкету волонтера"
  our-friends: "Нам допомагають"
  gratitude: "Подяка"
  appeal-description:
    "<p>Звернення дружини Посла України у Республіці Казахстан:</p>"
  appeal:
    "Люди відкривають свої домашні аптечки і віддають останнє. Це неймовірно. Я не очікувала, що наша трагедія стане такою близькою народові Казахстану. Від імені усіх родин України ми щиро дякуємо громадянам Казахстану за безперервну допомогу та підтримку!Це величезний внесок до розвитку тісних відносин між нашими народами, які мають багато спільних сторінок історії, у тому числі трагічних. Казахстан розуміє наш біль, ми це відчуваємо."
  oksana-vrublevskaya: "Оксана Врубльовська"
  arman-shuraev: "Арман Шураєв"
  arman-shuraev-position: "Громадський діяч та підприємець"
  arman-shuraev-action: "Підтримав ініціативу Ел болашағи, організував плов для волонтерів, які сортували і завантажували гуманітарну допомогу, виділив 1 мільйон тенге на харчування волонтерів."

en-US:
  title: "Humanitarian Aid Headquarters for Ukraine in Kazakhstan"
  give-things: "Bring humanitarian aid"
  send-money: "Send money"
  become-volunteer: "Become a volunteer"
  our-mission: "Our mission"
  our-mission-description:
    "<p>Our movement for collecting humanitarian aid began on February 25 along with the <i>El bolashagy</i> civil initiative statement.</p>
    <p><i>El bolashagy</i> started the movement, organized volunteers, and called on Kazakhstanis to help the civilian population of Ukraine that needs emergency humanitarian assistance in times of war.</p>
    <p>After <i>El bolashagy</i> withdrew from the movement on March 13, the initiative was taken over by volunteers — ordinary Kazakhstanis from the Humanitarian Aid Headquarters. Now they are organizing and sending humanitarian aid to Ukraine on their own.</p>
    <p>As of March 5, more than 150 million tenge (around $300.000) were raised by caring Kazakhstanis.</p>
    <p>Our headquarters on social networks:</p>"
  how-can-you-help: "How can you help?"
  medicines: "Medical devices and medicines"
  food: "Food"
  for-childs: "For children"
  field-medicine: "Field medicine"
  point-place: "Humanitarian aid reception facility is located at the Embassy of Ukraine in the Republic of Kazakhstan at the address:"
  point-place-address: "г. Астана, ул. Жылой, 12, м-н Караоктель-2"
  point-place-working-time: "Humanitarian aid reception hours:"
  point-place-working-time-diapason: "10:00 - 19:00 on weekdays, 11:00 - 16:00 on weekends"
  card-to-bank: "Transfer funds to Nat. Bank of Ukraine via a bank card:"
  transfer-to-embasy: "Transfer funds to the Embassy using the following bank details:"
  go-to-bank-website: "Go to the bank's website"
  become-volunteer-description:
    "<p>The Humanitarian Aid Headquarters for Ukraine is recruiting volunteers for various positions.</p>
    <ul>
    <li>On-site assistance: humanitarian aid acceptance, packaging, labeling, loading.</li>
    <li>Online participation - consulting, SMM, design, translation, information search and more.</li>
    <li>Organizational activities in fundraising.</li>
    </ul>
    <p>Perhaps it is your abilities and skills that will be useful to us.</p>"
  volunteer-form: "Volunteer application form"
  our-friends: "They help us"
  gratitude: "Acknowledgement"
  appeal-description:
    "<p>Ukrainian Ambassador’s wife addressed the Republic of Kazakhstan:</p>"
  appeal:
    "They open their medicine boxes and bring us the little they have. This is astonishing. I wasn't expecting the people of Kazakhstan to care so much about our tragedy. On behalf of all Ukrainian families, we sincerely thank Kazakhstan citizens for their continuous help and support! This is a great contribution to the development of close relations between the two nations. Our historical paths have so much in common, and we share many tragical experiences of the past. Kazakhstan knows our pain, we can feel it."
  oksana-vrublevskaya: "Oksana Vrublevskaya"
  arman-shuraev: "Arman Shuraev"
  arman-shuraev-position: "Public figure and entrepreneur"
  arman-shuraev-action: "He supported the initiative of El bolashagy, organized a party for the volunteers who sorted and loaded humanitarian aid, allocated 1 million tenge for food for volunteers."
</i18n>

