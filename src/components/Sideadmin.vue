<template>
  <aside
    id="sidebar"
    class="fixed -left-full top-0 bottom-0 md:static z-40 w-60 overflow-y-auto bg-blue-800 flex-shrink-0"
  >
    <header
      class="flex items-center justify-between h-14 px-4 py-2 mb-2 border-b border-blue-700"
    >
      <div class="flex-shrink-0 mr-5 font-bold text-xl text-white">
        <a href="/"> E-Commerce </a>
      </div>
      <button
        onclick="hide_sidebar()"
        class="md:hidden float-right appearance-none border border-transparent bg-transparent text-white"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </header>

    <ul>
      <li class="hover:bg-blue-100 relative">
        <a
          href="admin-main.html"
          class="flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
        >
          <span aria-hidden="true">
            <svg
              class="text-white opacity-50"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </span>
          <span class="ml-3">Dashboard</span>
        </a>
      </li>

      <li class="hover:bg-blue-100 relative">
        <a
          href="admin-form-add.html"
          class="flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
        >
          <span aria-hidden="true">
            <svg
              class="text-white opacity-50"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
              ></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </span>
          <span class="ml-3">Products</span>
        </a>
      </li>

      <li class="hover:bg-blue-100 relative">
        <a
          href="#"
          class="flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
        >
          <span aria-hidden="true">
            <svg
              class="text-white opacity-50"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path
                d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
              ></path>
            </svg>
          </span>
          <span class="ml-3">Orders</span>
        </a>
      </li>

      <li class="hover:bg-blue-100 relative">
        <a
          href="admin-table.html"
          class="flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
        >
          <span aria-hidden="true">
            <svg
              class="text-white opacity-50"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </span>
          <span class="ml-3">Customers</span>
        </a>
      </li>

      <li class="hover:bg-blue-100 relative">
        <a
          href="#"
          class="flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
        >
          <span aria-hidden="true">
            <svg
              class="text-white opacity-50"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
              ></path>
            </svg>
          </span>
          <span class="ml-3">Settings</span>
        </a>
      </li>

      <li class="hover:bg-blue-100 relative">
        <a
          href="admin-blank.html"
          class="flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
        >
          <span aria-hidden="true">
            <svg
              class="text-white opacity-50"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
              ></path>
              <polyline points="13 2 13 9 20 9"></polyline>
            </svg>
          </span>
          <span class="ml-3">Blank page</span>
        </a>
      </li>

      <li class="relative">
        <a
          href="#"
          class="flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
        >
          <span aria-hidden="true">
            <svg
              class="text-white opacity-50"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
              ></path>
              <polyline points="13 2 13 9 20 9"></polyline>
            </svg>
          </span>
          <span class="ml-3">More pages</span>
          <span>
            <svg
              class="text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
            </svg>
          </span>
        </a>
        <div class="submenu pb-3">
          <a href="#" class="pl-14 py-1 block text-white hover:bg-blue-700"
            >Submenu one</a
          >
          <a href="#" class="pl-14 py-1 block text-white hover:bg-blue-700"
            >Submenu two</a
          >
        </div>
      </li>

      <li class="relative">
        <a
          href="#"
          class="flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
        >
          <span aria-hidden="true">
            <svg
              class="text-white opacity-50"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
              ></path>
              <polyline points="13 2 13 9 20 9"></polyline>
            </svg>
          </span>
          <span class="ml-3">Dropdown</span>
          <span>
            <svg
              class="text-white opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
            </svg>
          </span>
        </a>
        <div class="submenu pb-3">
          <a href="#" class="pl-14 py-1 block text-white hover:bg-blue-700"
            >Submenu one</a
          >
          <a href="#" class="pl-14 py-1 block text-white hover:bg-blue-700"
            >Submenu two</a
          >
          <a href="#" class="pl-14 py-1 block text-white hover:bg-blue-700"
            >Submenu three</a
          >
        </div>
      </li>
    </ul>

    <hr class="border-blue-600" />

    <div class="px-5 my-6">
      <button
        class="inline-block w-full text-left px-4 py-2 text-black bg-yellow-400 border border-transparent rounded-md hover:bg-yellow-500"
      >
        Create account <span class="float-right" aria-hidden="true">+</span>
      </button>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style></style>
