import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import Input from "./Input";

export default function BookModal({ user, isOpen, setIsOpen, handeBook, name, price }) {
    const { displayName, email, photoURL } = user;

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-base-100 align-middle shadow-xl transition-all">
                                <form onSubmit={handeBook} className="relative p-8 text-left">
                                    <div className="justify-between sm:flex items-center">
                                        <div>
                                            <h3 className="text-xl font-bold">{displayName}</h3>
                                            <p className="mt-1 text-sm font-medium text-base-content/60">{email}</p>
                                        </div>
                                        <div className="ml-3 hidden flex-shrink-0 sm:block">
                                            <img alt="" src={photoURL} className="h-10 w-10 rounded-lg object-cover shadow-sm" />
                                        </div>
                                    </div>
                                    <div className="mt-4 sm:pr-8 text-center">
                                        <h3 className="text-xl font-bold">{name}</h3>
                                        <p className="mt-1 text-sm font-medium text-base-content/60">Price : ${price}</p>
                                    </div>
                                    <dl className="mt-6 flex flex-col gap-5">
                                        <Input type={"text"} name={"meet_location"} text={"Meeting Location"} />
                                        <Input type={"text"} name={"buyer_phone"} text={"Phone"} />
                                        <button type="submit" className="w-full btn btn-primary" onClick={() => setIsOpen(false)}>
                                            Submit
                                        </button>
                                    </dl>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
