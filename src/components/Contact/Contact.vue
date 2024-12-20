<template>
    <div id="contact">
        <div class="max-w-screen-md mx-auto mb-8">
            <div class="text-center">
                <h2 class="font-bold text-5xl">Contact <span class="text-green-600"> Us</span></h2>
                <span class="text-2xl mt-4 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    aperiam
                    pariatur
                    aspernatur sapiente, natus ducimus modi nam accusamus tempora recusandae voluptates
                    excepturi.</span>
            </div>
        </div>
        <div class="grid max-w-sm md:max-w-4xl xl:max-w-6xl grid-cols-1 gap-8 mx-auto rounded-lg md:grid-cols-2">
            <div class="flex flex-col justify-between">
                <div class="space-y-2 text-center md-text-start">
                    <h2 class="text-4xl font-bold leading-tight lg:text-8xl">Let's talk!</h2>
                    <div class="dark:text-gray-600 text-xl">Vivamus in nisl metus? Phasellus.</div>
                </div>
                <img src="/assets/image/image20.png" alt="" class="p-6">
            </div>
            <form novalidate="" class="space-y-6">
                <div class="block md:block xl:flex justify-between items-center xl:mb-6">
                    <div>
                        <label for="name" class="text-xl">Full name</label>
                        <input id="name" type="text" placeholder="" class="w-full p-3 rounded dark:bg-gray-100">
                    </div>
                    <div class="my-6 md:my-6 xl:my-0 ">
                        <label for="email" class="text-xl">Email</label>
                        <input id="email" type="email" class="w-full p-3 rounded dark:bg-gray-100">
                    </div>
                </div>
                <div>
                    <label for="message" class="text-xl">Message</label>
                    <textarea id="message" rows="3" class="w-full p-3 rounded dark:bg-gray-100"></textarea>
                </div>
                <div class="flex justify-center">
                    <button type="submit"
                        class="rounded-full bg-green-600 px-8 py-3 xl:text-xl md:text-md font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                        Message</button>
                </div>
            </form>
        </div>
    </div>
</template>