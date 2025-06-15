
# 🚀 Инструкция по деплою DroneShow на Vercel

## 📋 Подготовка к деплою

### 1. Предварительные требования
- Аккаунт на [GitHub](https://github.com)
- Аккаунт на [Vercel](https://vercel.com)
- Установленный Git на локальной машине
- Node.js версии 18+ и npm/yarn

### 2. Подготовка репозитория GitHub

#### Создание репозитория
1. Войдите в свой аккаунт GitHub
2. Создайте новый репозиторий с именем `droneshow-website`
3. Сделайте репозиторий публичным (для бесплатного деплоя)

#### Загрузка кода
```bash
# Перейдите в папку проекта
cd /home/ubuntu/droneshow/app

# Инициализируйте Git репозиторий
git init

# Добавьте все файлы
git add .

# Создайте первый коммит
git commit -m "Initial commit: DroneShow website ready for deployment"

# Добавьте удаленный репозиторий (замените YOUR_USERNAME на ваш GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/droneshow-website.git

# Отправьте код на GitHub
git branch -M main
git push -u origin main
```

## 🌐 Деплой на Vercel

### Способ 1: Через веб-интерфейс Vercel (Рекомендуется)

1. **Войдите в Vercel**
   - Перейдите на [vercel.com](https://vercel.com)
   - Войдите через GitHub аккаунт

2. **Импорт проекта**
   - Нажмите "New Project"
   - Выберите репозиторий `droneshow-website`
   - Нажмите "Import"

3. **Настройка проекта**
   - **Project Name**: `dreamfly-drones` (это будет ваш поддомен)
   - **Framework Preset**: Next.js (должно определиться автоматически)
   - **Root Directory**: оставьте пустым или укажите `./` если проект в корне
   - **Build Command**: `npm run build` (по умолчанию)
   - **Output Directory**: `.next` (по умолчанию)
   - **Install Command**: `npm install` (по умолчанию)

4. **Переменные окружения** (если необходимо)
   ```
   NEXT_PUBLIC_SITE_URL=https://dreamfly-drones.vercel.app
   ```

5. **Деплой**
   - Нажмите "Deploy"
   - Дождитесь завершения сборки (обычно 2-5 минут)

### Способ 2: Через Vercel CLI

```bash
# Установите Vercel CLI
npm i -g vercel

# Войдите в аккаунт
vercel login

# Деплой проекта
vercel --prod

# Следуйте инструкциям:
# - Set up and deploy? [Y/n] Y
# - Which scope? Выберите ваш аккаунт
# - Link to existing project? [y/N] N
# - What's your project's name? dreamfly-drones
# - In which directory is your code located? ./
```

## 🎯 Получение поддомена dreamfly-drones.vercel.app

### Автоматическое получение
Если вы назвали проект `dreamfly-drones`, поддомен будет создан автоматически:
- **URL**: `https://dreamfly-drones.vercel.app`

### Ручная настройка домена
1. В панели Vercel перейдите в настройки проекта
2. Вкладка "Domains"
3. Добавьте домен: `dreamfly-drones.vercel.app`
4. Vercel автоматически настроит SSL сертификат

## 🔧 Настройка после деплоя

### 1. Проверка работоспособности
- Откройте `https://dreamfly-drones.vercel.app`
- Проверьте все разделы сайта
- Убедитесь, что формы работают корректно

### 2. SEO настройки

#### Google Search Console
1. Перейдите в [Google Search Console](https://search.google.com/search-console/)
2. Добавьте свойство: `https://dreamfly-drones.vercel.app`
3. Подтвердите владение через HTML-тег или файл
4. Отправьте sitemap: `https://dreamfly-drones.vercel.app/sitemap.xml`

#### Яндекс.Вебмастер
1. Перейдите в [Яндекс.Вебмастер](https://webmaster.yandex.ru/)
2. Добавьте сайт: `https://dreamfly-drones.vercel.app`
3. Подтвердите права на сайт
4. Добавьте sitemap в разделе "Индексирование"

### 3. Аналитика

#### Google Analytics 4
```javascript
// Добавьте в app/layout.tsx перед закрывающим тегом </head>
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### Яндекс.Метрика
```javascript
// Добавьте код счетчика в app/layout.tsx
<script type="text/javascript">
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(COUNTER_ID, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
```

## 🔄 Автоматические обновления

### Настройка CI/CD
Vercel автоматически пересобирает сайт при каждом push в main ветку:

```bash
# Внесите изменения в код
git add .
git commit -m "Update: описание изменений"
git push origin main

# Vercel автоматически запустит новый деплой
```

### Превью деплои
- Каждый pull request создает превью-деплой
- Тестируйте изменения перед мержем в main

## 📊 Мониторинг и оптимизация

### 1. Vercel Analytics
- Включите в настройках проекта
- Отслеживайте производительность и посещаемость

### 2. Lighthouse аудит
```bash
# Установите Lighthouse CLI
npm install -g lighthouse

# Проведите аудит
lighthouse https://dreamfly-drones.vercel.app --output html --output-path ./lighthouse-report.html
```

### 3. PageSpeed Insights
- Проверьте сайт на [PageSpeed Insights](https://pagespeed.web.dev/)
- Оптимизируйте по рекомендациям

## 🛠 Устранение проблем

### Частые ошибки при деплое

#### 1. Build Error: Module not found
```bash
# Проверьте package.json на наличие всех зависимостей
npm install

# Убедитесь, что все импорты корректны
```

#### 2. Environment Variables
```bash
# В настройках Vercel добавьте переменные окружения:
# Settings > Environment Variables
```

#### 3. Routing Issues
```bash
# Проверьте vercel.json на корректность настроек
# Убедитесь, что все пути указаны правильно
```

### Логи и отладка
1. В панели Vercel перейдите в "Functions"
2. Просмотрите логи выполнения
3. Используйте `console.log()` для отладки

## 📞 Поддержка

### Документация
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

### Сообщество
- [Vercel Discord](https://vercel.com/discord)
- [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)

## ✅ Чек-лист после деплоя

- [ ] Сайт открывается по адресу `https://dreamfly-drones.vercel.app`
- [ ] Все страницы загружаются корректно
- [ ] Формы отправляют данные
- [ ] SEO мета-теги отображаются правильно
- [ ] Sitemap.xml доступен и корректен
- [ ] Robots.txt настроен правильно
- [ ] SSL сертификат активен
- [ ] Google Search Console настроен
- [ ] Яндекс.Вебмастер настроен
- [ ] Аналитика подключена
- [ ] Мобильная версия работает корректно
- [ ] Скорость загрузки оптимальна

## 🎉 Готово!

Ваш сайт DroneShow теперь доступен по адресу:
**https://dreamfly-drones.vercel.app**

Поздравляем с успешным деплоем! 🚀
