function triParInsertion(arr) {
    // Parcourir des éléments du tableau 
    for (let i = 1; i < arr.length; i++) {
        // Sélectionner l'élément à insérer
        let key = arr[i];
        // Déplacer les éléments de arr[0..i-1] qui sont plus grands que key
        let j = i - 1;
        
        // Déplacer les éléments du tableau qui sont plus grands que key vers la droite
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Insérer key dans la bonne position
        arr[j + 1] = key;
    }
}

#   i n e r s t i o n . j s  
 