import Head from 'next/head'
import { useState } from 'react'
import { Alert, Button, Card, Checkbox, Form, Input, Space, Typography } from 'antd'
import styles from '../styles/Home.module.css'

const { Link, Paragraph, Text, Title } = Typography

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState('')

  const handleFinish = (values) => {
    setIsSubmitting(true)

    window.setTimeout(() => {
      setSubmittedEmail(values.email)
      setIsSubmitting(false)
    }, 600)
  }

  return (
    <>
      <Head>
        <title>登入 | React Demo</title>
        <meta name="description" content="使用 Next.js 12、React 19 與 Ant Design 6 建立的登入頁面" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <Text className={styles.badge}>React 19 · Next.js 12 · Ant Design 6</Text>
          <Title className={styles.title}>歡迎回來</Title>
          <Paragraph className={styles.subtitle}>
            使用簡潔、安全且易於擴充的登入入口，快速存取你的工作台與資料。
          </Paragraph>

          <Space direction="vertical" size={20} className={styles.highlights}>
            <div className={styles.highlightItem}>
              <Text strong>統一帳號管理</Text>
              <Paragraph>整合企業帳號登入流程，讓使用者快速驗證身分。</Paragraph>
            </div>
            <div className={styles.highlightItem}>
              <Text strong>清楚的操作回饋</Text>
              <Paragraph>即時表單驗證與成功提示，降低輸入錯誤造成的阻礙。</Paragraph>
            </div>
          </Space>
        </section>

        <Card bordered={false} className={styles.card}>
          <Space direction="vertical" size={24} className={styles.formWrapper}>
            <div>
              <Title level={3} className={styles.formTitle}>
                登入帳號
              </Title>
              <Paragraph className={styles.formDescription}>
                請輸入你的 Email 與密碼以繼續。
              </Paragraph>
            </div>

            {submittedEmail ? (
              <Alert
                type="success"
                showIcon
                message="登入成功"
                description={`已收到 ${submittedEmail} 的登入請求。`}
              />
            ) : null}

            <Form layout="vertical" size="large" onFinish={handleFinish} requiredMark={false}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: '請輸入 Email' },
                  { type: 'email', message: '請輸入有效的 Email 格式' },
                ]}
              >
                <Input placeholder="you@example.com" autoComplete="email" />
              </Form.Item>

              <Form.Item
                label="密碼"
                name="password"
                rules={[
                  { required: true, message: '請輸入密碼' },
                  { min: 8, message: '密碼至少需要 8 個字元' },
                ]}
              >
                <Input.Password placeholder="請輸入密碼" autoComplete="current-password" />
              </Form.Item>

              <div className={styles.formOptions}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>記住我</Checkbox>
                </Form.Item>
                <Link href="#">忘記密碼？</Link>
              </div>

              <Button type="primary" htmlType="submit" block loading={isSubmitting}>
                登入
              </Button>
            </Form>

            <Text className={styles.signupText}>
              還沒有帳號？<Link href="#">立即註冊</Link>
            </Text>
          </Space>
        </Card>
      </main>
    </>
  )
}
