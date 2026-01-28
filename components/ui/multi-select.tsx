'use client'

import { useEffect, useRef, useState } from 'react'
import { X, ChevronDown } from 'lucide-react'

import { Category, useCategoryStore } from '@/store/category.store'
import { getCategoryData } from '@/store/category.actions'


interface MultiSelectProps {
    value: Category[]
    onChange: (value: Category[]) => void
}

export function MultiSelect({ value, onChange }: MultiSelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const {
        categories,
        loading,
    } = useCategoryStore()

    useEffect(() => {
        if (categories.length === 0) {
            getCategoryData();
        }
        return;
    }, [])


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const unselectedOptions = categories.filter(
        option => !value.some(v => v.id === option.id)
    )

    const handleRemove = (id?: string) => {
        if (!id) return
        onChange(value.filter(item => item.id !== id))
    }

    const handleSelect = (cat: Category) => {
        onChange([...value, cat])
        setIsOpen(false)
    }

    const handleClearAll = () => {
        onChange([])
    }

    return (
        <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Select Categories
            </h2>

            <div ref={containerRef} className="relative">
                <div className="border-2 border-blue-500 rounded-lg bg-white">
                    <div
                        className="
                            grid 
                            grid-cols-[1fr_auto] 
                            items-center
                            gap-2
                            p-3
                        "
                    >
                        {/* LEFT: selected items + input */}
                        <div className="flex flex-wrap items-center gap-2 min-w-0">
                            {value.map(item => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    <span className="whitespace-nowrap">{item.title}</span>
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="hover:opacity-70 transition-opacity"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ))}

                            {/* input always present */}
                            <input
                                type="text"
                                className="flex-1 min-w-20 outline-none bg-transparent text-sm"
                                onFocus={() => !loading && setIsOpen(true)}
                                readOnly
                            />
                        </div>

                        {/* RIGHT: action buttons */}
                        <div className="flex items-center gap-1">
                            {value.length > 0 && (
                                <button
                                    type='button'
                                    onClick={handleClearAll}
                                    className="p-1 hover:bg-gray-200 rounded transition-colors"
                                    title="Clear all"
                                >
                                    <X size={18} className="text-gray-600" />
                                </button>
                            )}
                            <button
                                type='button'
                                onClick={() => !loading && setIsOpen(!isOpen)}
                                className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                                <ChevronDown size={18} className="text-gray-600" />
                            </button>
                        </div>
                    </div>
                </div>



                {isOpen && !loading && unselectedOptions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        {unselectedOptions.map(option => (
                            <button
                                type='button'
                                key={option.id}
                                onClick={() => handleSelect(option)}
                                className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700 text-sm"
                            >
                                {option.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
