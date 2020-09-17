import React from "react";

import {
  View,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Group,
  Button,
  Placeholder,
  Banner,
  FormLayout,
  Div,
  File,
  Input,
  Textarea,
  FormLayoutGroup,
  Cell,
  Card,
  Checkbox,
  Separator,
  Text,
  Header,
  List,
  CellButton
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Icon56GalleryOutline from "@vkontakte/icons/dist/56/gallery_outline";
import Icon56CheckCircleOutline from "@vkontakte/icons/dist/56/check_circle_outline";
import Icon56AddCircleOutline from "@vkontakte/icons/dist/56/add_circle_outline";
import Icon36PodcastsOutline from "@vkontakte/icons/dist/36/podcasts_outline";
import Icon24Add from "@vkontakte/icons/dist/24/add"

import "./App.css";

function App() {
  const [currentPanel, setCurrentPanel] = React.useState("createPodcast");
  const [isReady, setIsReady] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [fileName, setFileName] = React.useState("");

  return (
    <View activePanel={currentPanel}>
      <Panel id="createPodcast" centered="true">
        <PanelHeader>Подкасты</PanelHeader>
        <Group>
          <Placeholder
            icon={<Icon56AddCircleOutline />}
            header="Добавьте первый подкаст"
            action={
              <Button size="l" onClick={() => setCurrentPanel("newPodcast")}>
                Добавить подкаст
              </Button>
            }
          >
            Добавляйте, редактируйте и делитесь <br /> подкастами вашего
            сообщества.
          </Placeholder>
        </Group>
      </Panel>
      <Panel id="newPodcast">
        <PanelHeader
          left={
            <PanelHeaderBack onClick={() => setCurrentPanel("createPodcast")} />
          }
        >
          Новый подкаст
        </PanelHeader>
        <Group>
          <FormLayout>
            <Cell
              before={
                <File
                  style={{ width: "66px", height: "66px", padding: "8px 16px" }}
                  mode="secondary"
                >
                  <Icon56GalleryOutline height={32} width={32} />
                </File>
              }
            >
              <Div
                style={{
                  marginBottom: "4px",
                  padding: "0 0 0 12px",
                  color: "#818c99",
                  fontSize: "14px",
                }}
              >
                Название подкаста
              </Div>
              <Input
                type="text"
                placeholder="Введите название подкаста"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </Cell>
            <Textarea
              top="Описание подкаста"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
                event.target.value !== "" && event.target.value !== null
                  ? setIsReady(true)
                  : setIsReady(false);
              }}
            />
            <Group>
              {isLoaded ? (
                <>
                  <Cell
                    before={
                      <Card
                        style={{ padding: "16px 16px", marginRight: "12px" }}
                      >
                        <Icon36PodcastsOutline />
                      </Card>
                    }
                  >
                    {
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span style={{ fontSize: "14px" }}>{fileName}</span>
                        <span style={{ fontSize: "12px", color: "#818c99" }}>
                          33:34
                        </span>
                      </div>
                    }
                  </Cell>
                  <Div
                    style={{
                      padding: "0 16px 16px 16px",
                      fontSize: "14px",
                      color: "#818c99",
                    }}
                  >
                    Вы можете добавить таймкоды и скорректировать подкаст в
                    режиме редактирования
                  </Div>
                  <Div>
                    <Button
                      size="xl"
                      mode="outline"
                      onClick={() => {
                        setCurrentPanel("editPodcast");
                      }}
                    >
                      Редактировать аудиозапись
                    </Button>
                  </Div>
                </>
              ) : (
                <Placeholder
                  style={{ padding: "0 0" }}
                  header="Загрузите Ваш подкаст"
                  action={
                    <File
                      type="file"
                      accept="audio/mp3"
                      mode="outline"
                      size="large"
                      onChange={(event) => {
                        setFileName(event.target.files[0].name);
                        setIsLoaded(true);
                      }}
                    >
                      Загрузить файл
                    </File>
                  }
                >
                  Выберите готовый аудиофайл из вашего <br /> устройства и
                  добавьте его
                </Placeholder>
              )}
              <Separator />
            </Group>
            <FormLayoutGroup>
              <Checkbox type="checkbox" name="checkbox">
                Ненормативный контент
              </Checkbox>
              <Checkbox type="checkbox" name="checkbox">
                Исключить эпизод из экспорта
              </Checkbox>
              <Checkbox type="checkbox" name="checkbox">
                Трейлер подкаста
              </Checkbox>
            </FormLayoutGroup>
          </FormLayout>
          <Banner
            mode="tint"
            header="Кому доступен данный подкаст"
            subheader="Всем пользователям"
            asideMode="expand"
          />
          <Div
            style={{
              padding: "0 16px 16px 16px",
              fontSize: "14px",
              color: "#818c99",
            }}
          >
            При публикации записи с эпизодом он становится доступным для всех
            пользователей
          </Div>
          <Div>
            {isReady ? (
              <Button
                size="xl"
                onClick={() => {
                  setCurrentPanel("podcastSnippet");
                }}
              >
                Далее
              </Button>
            ) : (
              <Button style={{ backgroundColor: "#B6CFEB" }} size="xl">
                Далее
              </Button>
            )}
          </Div>
          <Div />
        </Group>
      </Panel>
      <Panel id="editPodcast">
        <PanelHeader
          left={
            <PanelHeaderBack onClick={() => setCurrentPanel("newPodcast")} />
          }
        >
          Редактирование
        </PanelHeader>
        <Group>
          <Div>
            <Card style={{height: "100px"}}>

            </Card>
            <Div style={{display:"flex", justifyContent: "space-between"}}>
              <Button>btn</Button>
              <Button mode="secondary">btn</Button>
              <Button mode="secondary">btn</Button>
              <Button mode="secondary">btn</Button>
              <Button mode="secondary">btn</Button>
            </Div>
          </Div>
          <Separator></Separator>
          <Header>Таймкоды</Header>
          <CellButton before={<Icon24Add />}>Добавить таймкод</CellButton>
          <List>

          </List>
        </Group>
      </Panel>
      <Panel id="podcastSnippet">
        <PanelHeader
          left={
            <PanelHeaderBack onClick={() => setCurrentPanel("newPodcast")} />
          }
        >
          Новый подкаст
        </PanelHeader>
        <Group>
          <Cell
            before={
              <Card style={{ padding: "16px 16px", marginRight: "12px" }}>
                <Icon36PodcastsOutline />
              </Card>
            }
            description={
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#3F8AE0", marginBottom: "4px" }}>
                  Автор
                </span>
                <span>Длительность: 51:22</span>
              </div>
            }
          >
            <span style={{ fontWeight: "600", fontSize: "16px" }}>{title}</span>
          </Cell>
          <Separator />
          <Header>Описание</Header>
          <Div>
            <Text weight="regular" style={{ marginBottom: 16 }}>
              {description}
            </Text>
          </Div>
          <Separator />
          <Header>Содержание</Header>
          <List>
            <Cell before={<span>23:34</span>}>
              <Div>
                <span style={{ marginRight: "6px" }}>-</span> Начало обсуждения
              </Div>
            </Cell>
            <Cell before={<span>23:34</span>}>
              <Div>
                <span style={{ marginRight: "6px" }}>-</span> Начало обсуждения
              </Div>
            </Cell>
            <Cell before={<span>23:34</span>}>
              <Div>
                <span style={{ marginRight: "6px" }}>-</span> Начало обсуждения
              </Div>
            </Cell>
            <Cell before={<span>23:34</span>}>
              <Div>
                <span style={{ marginRight: "6px" }}>-</span> Начало обсуждения
              </Div>
            </Cell>
            <Cell before={<span>23:34</span>}>
              <Div>
                <span style={{ marginRight: "6px" }}>-</span> Начало обсуждения
              </Div>
            </Cell>
            <Cell before={<span>23:34</span>}>
              <Div>
                <span style={{ marginRight: "6px" }}>-</span> Начало обсуждения
              </Div>
            </Cell>
          </List>
          <Separator />

          <Div>
            <Button size="xl" onClick={() => setCurrentPanel("podcastCreated")}>
              Опубликовать подкаст
            </Button>
          </Div>
        </Group>
      </Panel>
      <Panel id="podcastCreated" centered="true">
        <PanelHeader>Подкасты</PanelHeader>
        <Group>
          <Placeholder
            icon={<Icon56CheckCircleOutline fill="3F8AE0" />}
            header="Подкаст добавлен"
            action={
              <Button size="l" onClick={() => setCurrentPanel("createPodcast")}>
                Поделиться подкастом
              </Button>
            }
          >
            Расскажите своим подписчикам <br /> о новом подкасте, чтобы получить{" "}
            <bt /> больше слушателей. сообщества.
          </Placeholder>
        </Group>
      </Panel>
    </View>
  );
}

export default App;
