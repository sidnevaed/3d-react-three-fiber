# Задание 1

## Задачи

1. Написать класс Viewer для отображения 3d модели (отображение, управление OrbitController)
2. Написать ViewerWrapper - React обертка над классом Viewer
3. Загрузить модель телефона
4. Настроить свойства окружения сцены

## Материалы

1. В основном все как в прошлой демке

2. Можно рассмотреть вариант с `useRef`

```TypeScript
  const viewer = useRef<Viewer | null>(null);
  const root = useRef<HTMLDivElement | null>(null);
```
И инициализировать при создании компонента

3. Использовать `GLTFLoader`. Модель находится в директории `./app/models`
- https://threejs.org/docs/#examples/en/loaders/GLTFLoader

4. Использовать `TextureLoader`. Карта окружения находится в директории `./app/env`
- https://threejs.org/docs/#api/en/loaders/TextureLoader

Настройки окружения нужно сделать у `THREE.Scene`. Поля: `environment` и `background`. Также стоит обратить внимание на поле `mapping` у тектсуры (`THREE.EquirectangularReflectionMapping`)
