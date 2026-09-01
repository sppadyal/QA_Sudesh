/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 2 : undefined,

  reporter: 'html',

  use: {
    trace: 'on-first-retry',
  },

  projects: [

    // Desktop
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: null,
        launchOptions: {
          args: ['--start-maximized']
        }
      }
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     browserName: 'firefox',
    //     viewport: null,
    //     launchOptions: {
    //       args: ['--start-maximized']
    //     }
    //   }
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     browserName: 'webkit',
    //     viewport: null,
    //     launchOptions: {
    //       args: ['--start-maximized']
    //     }
    //   }
    // }
    // // Mobile Android
    // {
    //   name: 'Pixel 5',
    //   use: {
    //     ...devices['Pixel 5']
    //   }
    // },

    // // Mobile iPhone
    // {
    //   name: 'iPhone 13',
    //   use: {
    //     ...devices['iPhone 13']
    //   }
    // }
  ]
});